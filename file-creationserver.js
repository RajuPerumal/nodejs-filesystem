import express from 'express';
import { createFile, getFile } from './fs-inbuilt.js';

const server = express();

// Create a file named current date and time.txt and content of the file should be current timestamp
server.post('/create-file', (req, res) => {
    const date = new Date();
    const timestamp = date.getTime().toString();
    const isoDateTime = date.toISOString().replaceAll(":", "-").split('.')[0];
    createFile("./api-files",`${isoDateTime}.txt`, timestamp, () => {
        res.status(201).json({ msg: "File created successfully" });
    }); 
}); 

// Get content of the file created by the server in the current date and time.txt
server.get('/get-files', (req, res) => {
    getFile(
        "./api-files", 
        (data)=> res.json(data),
        ()=> res.status(500).json({ msg: "Something went wrong" })
    );
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
