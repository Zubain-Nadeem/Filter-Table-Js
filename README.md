# Simple JavaScript Filter Table

This is a basic **Filter Table** project made using **HTML**, **CSS**, and **JavaScript**.  
It allows users to search through table data easily — typing any word in the search box will filter the rows that match that text in any column.

---

## 📁 Project Structure

filter-table/
│
├── index.html # Main HTML page
├── style.css # Styling for the table and layout
└── script.js # JavaScript logic for filtering rows


---

## ⚙️ How It Works

1. The user types something in the search box.  
2. JavaScript checks every row in the table.  
3. If the text matches any cell (case-insensitive), that row stays visible.  
4. Non-matching rows are hidden automatically.  
5. The "Clear" button resets the search, and "Show All" displays every row again.

---

## 🧠 Key Concepts Used

- DOM Manipulation (`document.getElementById`, `querySelector`)
- Event Listeners (`input`, `click`)
- Basic CSS styling and responsive design
- JavaScript `forEach()` and `includes()` methods

---

## 💡 Features

- Works in any modern browser
- No external libraries — **pure HTML, CSS, and JS**
- Simple and easy to understand (perfect for beginners)
- Responsive design for small screens
- Case-insensitive search across all table columns

---

