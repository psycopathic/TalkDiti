import express from 'express';
import authRoutes from './routers/authRoutes.js'
import messageRoutes from './routers/messageRoutes.js'
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { app, server } from './lib/Socket.js';

import path from 'path';


//initialization
dotenv.config();
const port = process.env.PORT|| 5000;
const __dirname = path.resolve();

//middleware
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
}   

app.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB();
})
