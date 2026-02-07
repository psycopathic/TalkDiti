# TalkDiti

![TalkDiti Application](./frontend/public/Screenshot%20from%202026-02-07%2012-18-10.png)

## 📝 Description

**TalkDiti** is a real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io for live communication.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure JWT-based authentication
- **Online Status**: See which users are currently online
- **Profile Pictures**: Upload and display user avatars using Cloudinary
- **Responsive Design**: Beautiful UI built with React, TailwindCSS, and DaisyUI

## 🔌 How Socket.io Works

Socket.io enables **real-time, bidirectional communication** between the client and server:

1. **Connection Establishment**: When a user logs in, a WebSocket connection is established between the client and server
2. **Event-Based Communication**: The client and server communicate by emitting and listening to events
3. **Live Updates**: Messages are instantly broadcasted to connected users without page refreshes
4. **Server-to-Client (S2C)**: Server pushes updates to clients in real-time (new messages, user status changes)
5. **Client-to-Server (C2S)**: Clients send events like sending messages or updating status
6. **Automatic Reconnection**: Socket.io handles connection drops and automatically reconnects

This creates a seamless, live chat experience where messages appear instantly for all participants.

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS + DaisyUI
- Zustand (State Management)
- Socket.io Client
- Axios

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Socket.io
- JWT Authentication
- Cloudinary (Image Upload)
- Bcrypt.js (Password Hashing)

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account (for image uploads)

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd TalkDiti
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Seed the database** (optional - adds 25 test users):

```bash
npm run seed
```

**Start the backend server**:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

**Start the frontend**:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### 4. MongoDB Atlas Configuration

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a cluster and database
3. Navigate to **Network Access** → Add your IP or allow `0.0.0.0/0` (for development)
4. Navigate to **Database Access** → Create a user with read/write permissions
5. Copy your connection string and add it to `.env`

### 5. Cloudinary Configuration

1. Sign up at [Cloudinary](https://cloudinary.com)
2. Go to Dashboard and copy your:
   - Cloud Name
   - API Key
   - API Secret
3. Add these to your backend `.env` file

## 🧪 Test Credentials

After seeding the database, you can login with:

- **Email**: `emma.wilson@example.com`
- **Password**: `password123`

Or any of the other 24 seeded users!

## 📁 Project Structure

```
TalkDiti/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Database schemas
│   │   ├── routes/          # API routes
│   │   ├── lib/             # Utilities (DB, Socket, Cloudinary)
│   │   ├── middlewares/     # Auth middleware
│   │   └── seeds/           # Database seeding scripts
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/      # React components
    │   ├── pages/           # Page components
    │   ├── store/           # Zustand stores
    │   └── lib/             # Utilities
    └── package.json
```

## 🚀 Deployment

### Backend
- Deploy to platforms like Railway, Render, or Heroku
- Set environment variables in the platform dashboard
- Ensure MongoDB Atlas allows connections from the deployment IP

### Frontend
- Deploy to Vercel, Netlify, or similar
- Update API URL in production build
- Set `VITE_API_URL` environment variable if needed

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

## 👨‍💻 Author

Built with ❤️ by the TalkDiti team

---

**Happy Chatting! 💬**
