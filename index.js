const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.get("/", function(req, res) {
    var name = "Donny";
    res.render('index', {name})
});


app.listen(port, () => console.log(`Listening at port ${port}`));