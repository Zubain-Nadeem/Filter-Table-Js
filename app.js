
const input = document.getElementById('tableSearch');
const table = document.getElementById('myTable');
const rows = Array.from(table.tBodies[0].rows);
const clearBtn = document.getElementById('clearBtn');
const showAllBtn = document.getElementById('showAllBtn');
const noResults = document.getElementById('noResults');

// Normalize text (case-insensitive)
function normalize(text) {
  return text.toLowerCase().trim();
}

// Filter function
function filterTable() {
  const query = normalize(input.value);
  let visibleCount = 0;

  rows.forEach(row => {
    const text = normalize(Array.from(row.cells).map(c => c.textContent).join(' '));
    if (text.includes(query) || query === '') {
      row.classList.remove('hidden');
      visibleCount++;
    } else {
      row.classList.add('hidden');
    }
  });

  noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

// Event listeners
input.addEventListener('input', filterTable);
clearBtn.addEventListener('click', () => {
  input.value = '';
  filterTable();
});
showAllBtn.addEventListener('click', () => {
  input.value = '';
  filterTable();
});

// Run once
filterTable();
