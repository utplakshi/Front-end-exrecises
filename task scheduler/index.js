import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
app.use(express.json()); //Adding Middleware and using that Middleware
app.use(express.urlencoded({ extended: true }));  //Can send key=value&key=value

import tasks from './data/tasks.js'

app.use(function(req, res, next) {
    console.log('Logging...');
    next();
});

app.use(function(req, res, next) {
    console.log('Authenticating...');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

// app.use('/data', data);

app.get('/data', (req, res) => {
    res.send('Getting Data...');
})

app.get('/tasks', (req, res) => {
    res.send(tasks);
})




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

// import { createServer } from 'http';
// // const schedule = require('node-schedule');
// import schedule from 'node-schedule';
// import cron from 'node-cron';

// const hostname = 'localhost';
// const port = 3000;
// const count = 0;
// const server = createServer((req, res) => {
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.end(`<html><body><h1>Hello, World!</h1></body></html>`);
//     cron.schedule("* * * * * *", () => {
//         // console.log("Running!!");
//     })
// });

// server.listen(port, hostname);

// // const cron = require("node-cron");