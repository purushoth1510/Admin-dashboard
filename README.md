# 📊 Admin Dashboard – React + TypeScript

A modern, clean **Admin Dashboard UI** built using **React, TypeScript, Bootstrap, and custom CSS**.  
This project simulates a real-world internal admin panel used in SaaS, enterprise, and analytics applications.

---

## 🚀 Features

- 🔐 **Login Page (UI-only demo authentication)**
- 📈 **Dashboard with Key Metrics**
  - Users
  - Revenue
  - Orders
  - Growth
- 📊 **Sales Analytics Graph** (Chart.js)
- 👥 **Users Page**
  - Modify user count
  - Real-time updates reflected on dashboard
- ⚙️ **Settings Page**
  - Update revenue and growth values
- 🧭 **Sidebar Navigation**
  - Active route highlighting
- 🔄 **Shared Application State**
  - Single data source updates all pages instantly
- 🎨 **Clean & Minimal UI**
  - SaaS-style layout
  - Hidden scrollbars for premium feel

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Bootstrap 5**
- **Custom CSS**
- **React Router**
- **Chart.js**

---

## 🧠 Architecture Highlights

- Reusable layout component (`AppLayout`)
- Centralized state management using React state
- Modular and scalable component structure
- Fully frontend-focused (no backend dependency)

---

## 📁 Project Structure

src/
├── components/
│ ├── AppLayout.tsx
│ ├── Sidebar.tsx
│ ├── Navbar.tsx
│ ├── StatCard.tsx
│ ├── SalesChart.tsx
│ └── UserTable.tsx
│
├── pages/
│ ├── Login.tsx
│ ├── Dashboard.tsx
│ ├── Users.tsx
│ └── Settings.tsx
│
├── data/
│ └── appData.ts
│
├── styles/
│ └── dashboard.css
│
└── App.tsx


---

## 🔑 Demo Login Credentials

Email: admin@example.com
Password: admin123


*(Authentication is UI-only and simulated for demo purposes.)*

---

## 📊 About Responsiveness & APIs

Currently, the dashboard uses **mock data stored in frontend state**.

🔹 When integrated with **real APIs**:
- Data can be fetched dynamically
- Dashboard metrics can update in real-time
- Responsiveness can be further enhanced using:
  - API-driven pagination
  - Lazy loading
  - Server-side filtering
  - WebSocket / polling updates

This structure is **fully ready for backend integration**.

---

## 🎯 Use Cases

- Admin panels
- Internal company dashboards
- Analytics tools
- SaaS product UIs
- Frontend portfolio projects

---

## 📌 Future Enhancements

- API integration
- Authentication with JWT
- Role-based access
- Persistent storage (localStorage / backend)
- Analytics page separation
- Dark mode

---

## 🧑‍💻 Author

Built with ❤️ using React & TypeScript  
Feel free to fork, improve, and use for learning or portfolios.

---

⭐ If you like this project, give it a star!
