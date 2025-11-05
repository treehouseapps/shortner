# 🔗 URL Shortener

A simple and efficient URL shortener that converts long links into short, shareable URLs. It ensures quick redirection, easy tracking, and a clean user experience.

---

## 🚀 Features

- ✂️ Shorten long URLs instantly  
- 🔁 Redirect users to the original link seamlessly  
- 📊 MongoDB integration for data persistence  
- 💡 Clean EJS-based frontend  
- ⚡ Lightweight and fast with Express.js backend  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS (Embedded JavaScript Templates)  
- **Database:** MongoDB with Mongoose  
- **Utilities:** shortid for unique link generation  
- **Environment Management:** dotenv  

---

## 📂 Project Structure

```
project/
│
├── public/             # Static assets (CSS, JS, Images)
├── views/              # EJS templates
│   ├── index.ejs
│   ├── result.ejs
│   └── error.ejs
│
├── models/
│   └── Url.js          # URL schema and model
│
├── routes/
│   └── shortener.js    # Routes for shortening and redirecting
│
├── index.js            # Main entry point
├── .env                # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:3000
   ```

4. **Run the server**
   ```bash
   npm start
   ```

5. **Access the app**
   ```
   http://localhost:3000
   ```

---

## 🧠 How It Works

1. User enters a long URL in the input box.  
2. The app generates a unique short ID using `shortid`.  
3. The long and short URLs are saved to MongoDB.  
4. When the short URL is visited, the user is redirected to the original long link.  

---

## 📸 Example

**Input:**  
```
https://www.example.com/articles/how-to-build-a-nodejs-app
```

**Output:**  
```
http://localhost:3000/XyZ12a
```

Clicking the short URL will redirect to the original link instantly.

---

## 🤝 Contributing

Contributions are welcome!  
If you’d like to enhance this project:
1. Fork this repository  
2. Create a new branch (`feature/your-feature-name`)  
3. Commit your changes  
4. Open a Pull Request  

---

## 🧾 License

This project is licensed under the **ISC License**.  
Feel free to use, modify, and share it.

---
