let todos = [];

// Validasi input dan tambah data
function validateForm() {
  const todoInput = document.getElementById('todo-input');
  const dateInput = document.getElementById('date-input');
  const todoText = todoInput.value.trim();
  const todoDate = dateInput.value;

  if (!todoText || !todoDate) {
    alert("Tolong isi datanya");
    return;
  }

  todos.push({
    text: todoText,
    date: todoDate
  });

  todoInput.value = '';
  dateInput.value = '';

  renderTodos(todos);
}

// memunculkan daftar todo
function renderTodos(list) {
  const container = document.getElementById('todo-list');
  container.innerHTML = '';

  if (!list || list.length === 0) {
    container.innerHTML = `<p class="text-gray-700 text-center mt-5">No To Do added yet</p>`;
    return;
  }

  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'border p-2 mb-2 rounded bg-white shadow';
    div.innerHTML = `<strong>${item.text}</strong><br><small>${item.date}</small>`;
    container.appendChild(div);
  });
}

// Hapus semua todo
function clearTodos() {
  if (confirm("Yakin ingin menghapus semua To Do?")) {
    todos = [];
    renderTodos(todos);
  }
}

// filter tanggal muda ke tua dan sebeliknya
let sortAscending = true; 
function sortTodosByDateAsc() {
  if (todos.length === 0) {
    alert("Belum ada To Do untuk diurutkan.");
    return;
  }

  let sorted;
  if (sortAscending) {
    // Urutkan dari tanggal termuda ke tua (ascending)
    sorted = [...todos].sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    // Urutkan dari tanggal tua ke termuda (descending)
    sorted = [...todos].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  renderTodos(sorted);

  // Toggle arah urutan supaya next klik berlawanan
  sortAscending = !sortAscending;
}