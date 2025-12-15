# 🛒 Snapakart – Online Grocery Delivery Platform

Snapakart is a **full-stack grocery delivery web application** built with **Next.js and TypeScript**, designed to handle multiple user roles such as **Admin, User (Customer), and Delivery Boy**. Each role has its own dedicated dashboard and functionalities, making the system scalable, secure, and production-ready.

---

## 🚀 Features

### 👤 User (Customer)

* User authentication & authorization
* Browse grocery products
* Add to cart & place orders
* Track order status
* View order history
* Profile management

### 🛠️ Admin

* Secure admin dashboard
* Manage products (Add / Update / Delete)
* Manage categories
* View & manage all orders
* Assign drivers to orders
* User & driver management

### 🚚 Delivery Boy

* Delivery Boy authentication
* View assigned orders
* Update delivery status (Picked / On the Way / Delivered)
* Order history

---

## 🧩 Tech Stack

### Frontend

* **Next.js** (App Router)
* **TypeScript**
* **React**
* **Tailwind CSS**

### Backend

* **Next.js API Routes**
* **Node.js**
* **REST APIs**

### Database

* **MongoDB / Supabase** (based on implementation)

### Authentication

* Role-based authentication (Admin / User / Delivery Boy)
* Secure session handling

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/snapakart.git
cd snapakart
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Project

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser 🚀

---

## 🔐 User Roles

| Role         | Access Level        |
| ------------ | ------------------- |
| Admin        | Full control        |
| User         | Shopping & Orders   |
| Delivery Boy | Delivery Management |

---

## 🌱 Future Enhancements

* Online payment integration
* Real-time order tracking
* Push notifications
* Reviews & ratings
* Mobile app version

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request


---

## 👩‍💻 Author

**Khushi Chetule**
Frontend & Full-Stack Developer

---

⭐ If you like this project, don't forget to **star the repo**!
