const express = require('express');
const path = require('path');
const app = express();
const distPath = path.join(__dirname, '../dist/my-app');
const assets = express.static(distPath);
app.use(assets);
app.use((req,res)=>res.sendFile(distPath+'/index.html'));
app.listen(3000, () => console.log("listen 3000..."));