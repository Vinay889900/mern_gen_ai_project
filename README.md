# 🚀 MERN Stack AI-Powered Web Application

Build an intelligent and responsive AI-powered web application using the **MERN Stack** and the blazing-fast **Deepseek R1** model via the **Groq API**. This project combines full-stack development with advanced AI integration to create a smart chatbot or content generation platform.

## 📚 What You'll Learn

* Setting up a complete **MERN** stack project from scratch
* Integrating **Deepseek R1** with the **Groq API** for real-time AI responses
* Designing a modern UI using **React.js** and **Tailwind CSS**
* Building an **Express.js** backend to handle AI and database operations
* Storing conversations or data in **MongoDB**

## 🛠️ Tech Stack

* **MongoDB** – NoSQL database to store user prompts and AI responses
* **Express.js** – Lightweight backend framework for handling API routes
* **React.js** – Frontend library for creating reactive UI components
* **Tailwind CSS** – Utility-first CSS for sleek and responsive design
* **Node.js** – Runtime environment to run backend JavaScript code
* **Deepseek R1** – Advanced open-weight model for natural language tasks
* **Groq API** – Ultra-fast inference engine for deploying AI models

## ⚙️ Project Setup

### ✅ Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/en) (v16+)
* [MongoDB](https://www.mongodb.com/) (local or cloud)
* [Groq API Key](https://groq.com/docs)
* [Tailwind CSS Guide (Vite)](https://v3.tailwindcss.com/docs/guides/vite)

---

### 🧩 Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vinay889900/mern_gen_ai_project
   cd mern_gen_ai_project
   ```

2. **Install dependencies**

   * Backend setup:

     ```bash
     cd backend
     npm install
     ```
   * Frontend setup:

     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure Environment Variables**
   Create a `.env` file inside the `backend` directory:

   ```env
   GROQ_API_KEY=your-groq-api-key
   ```

4. **Start the backend server**

   ```bash
   cd backend
   npx nodemon
   ```

5. **Start the frontend server**

   ```bash
   cd ../frontend
   npm run dev
   ```

6. **Visit the App in Your Browser**

   * Frontend: [http://localhost:5173](http://localhost:5173)
   * Backend Endpoint: [http://localhost:3000/ai/get-review](http://localhost:3000/ai/get-review)
