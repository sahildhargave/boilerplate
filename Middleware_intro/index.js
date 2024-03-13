const express = require('express');
const app = express();

// app.get('./', (req, res) => {
//     res.send('HOME PAGE!')
// })
// app.get('./dogs', (req, res) => {
//     res.send('WOOF WOOD!')
// })

app.listen(3000, () => {
    console.log('App Is Running On LocalHost:3000  ')
})