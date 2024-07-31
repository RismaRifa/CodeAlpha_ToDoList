const express = require('express')
const app = express();
const port = 3001;

app.use(express.json());
app.get('/',(req,res) => {
    res.send('Hello From Server');
});

app.listen(port,() => {
    console.log(`server runnning at http://localhost:${port}`);
});