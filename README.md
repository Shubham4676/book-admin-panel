# 📚 Book Admin Panel

A cloud-based admin panel built with React and Express.js that scrapes book data (title and price) from a public website and displays it in a simple, responsive UI. Users can trigger scraping on demand by clicking a "Scrape Now" button.

---

## ✨ Features

- ✅ On-demand book data scraping from a public site
- 📦 Data stored and served through a backend API
- ⚡ Modern frontend using React + Vite
- ☁️ Deployed to Vercel (frontend) and Render (backend)

---

## 🚀 Live Demo

🌐 [Visit Book Admin Panel](https://book-admin-panel-<your-vercel-id>.vercel.app)

> Replace `<your-vercel-id>` with your actual deployment URL

---

## 🛠️ Technologies Used

### Frontend
- React (with TypeScript)
- Vite
- Axios
- Tailwind CSS (optional)
- React Router DOM (for navigation)

### Backend
- Node.js
- Express.js
- Cheerio (for scraping)
- Axios (for fetching HTML)
- MongoDB (for storing books)

---

## 📁 Project Structure

book-admin-panel/
├── client/ # React frontend
│ ├── src/
│ │ ├── App.tsx
│ │ └── ...
│ └── public/
├── server/ # Express backend
│ ├── index.js
│ ├── scraper.js
│ └── models/Book.js
└── README.md


---

## 🧪 Local Development

### Prerequisites
- Node.js
- npm
- MongoDB (or MongoDB Atlas URI)

### Clone the Repo

```bash
git clone https://github.com/Shubham4676/book-admin-panel.git
cd book-admin-panel


---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js and npm installed
- MongoDB URI (e.g. from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

### 1️⃣ Clone the Repository
git clone https://github.com/Shubham4676/book-admin-panel.git
cd book-admin-panel

2️⃣ Setup Backend

cd server
npm install

Create a .env file in the server/ directory with your MongoDB URI:
MONGO_URI=your_mongodb_connection_string
Start the server:  npm start

3️⃣ Setup Frontend

cd ../client
npm install
npm run dev
Frontend runs at: http://localhost:5173

🛠 Usage

1. Start both frontend and backend servers.

2. Open the frontend in your browser.

3. Click on the Scrape Now button to scrape new books and update the list.

4. The books will be fetched from the backend and displayed in a table.

🌍 Deployment

Frontend on Vercel
- Push client/ folder to GitHub.
- Go to vercel.com, import your repo.
- Set Root Directory: client
- Set Build Command: npm run build
- Set Output Directory: dist

Backend on Render
- Push server/ folder to GitHub.
- Go to render.com, create a new Web Service.
- Set:
      - Start command: node index.js
      - Environment variable MONGO_URI













