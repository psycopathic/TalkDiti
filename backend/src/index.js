import express from 'express';
import authRoutes from './routers/authRoutes.js'
import messageRoutes from './routers/messageRoutes.js'
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './lib/Socket.js';

import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//initialization
dotenv.config();
const port = process.env.PORT|| 5000;

//middleware
app.use(cors({
    origin: process.env.NODE_ENV === "production" 
        ? process.env.FRONTEND_URL 
        : "http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

if(process.env.NODE_ENV === "production") {
    const distPath = path.join(__dirname, '../../frontend/dist');
    app.use(express.static(distPath));
    
    // Handle React routing - return index.html for all non-API routes
    app.get(/^(?!\/api).*/, (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    });
}

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB();
})
