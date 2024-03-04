const itemsPerPage = 8;
const list = document.getElementById('list');
const pagination = document.getElementById('pagination');
const totalItems = list.children.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
let currentPage = 1;

function showPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  for (let i = 0; i < totalItems; i++) {
    if (i >= start && i < end) {
      list.children[i].style.display = 'block';
    } else {
      list.children[i].style.display = 'none';
    }
  }
}

function createPagination() {
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    if (i === 1) {
      button.classList.add('active');
    }
    button.addEventListener('click', function() {
      const current = document.querySelector('#pagination button.active');
      current.classList.remove('active');
      this.classList.add('active');
      showPage(i);
      currentPage = i;
    });
    pagination.insertBefore(button, pagination.children[pagination.children.length - 1]);
  }
}

function updateButtons() {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (currentPage === totalPages) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

document.getElementById('prev').addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    const current = document.querySelector('#pagination button.active');
    current.classList.remove('active');
    document.querySelector(`#pagination button:nth-child(${currentPage + 1})`).classList.add('active');
    showPage(currentPage);
    updateButtons();
  }
});

document.getElementById('next').addEventListener('click', function() {
  if (currentPage <= totalPages) {
    currentPage++;
    const current = document.querySelector('#pagination button.active');
    current.classList.remove('active');
    document.querySelector(`#pagination button:nth-child(${currentPage + 1})`).classList.add('active');
    showPage(currentPage);
    updateButtons();
  }
});

showPage(1);
createPagination();
updateButtons();