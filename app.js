const express= require("express");
const app = express();
const rutasMain = require ("./routers/main")

app.listen(3000,()=> {
    console.log("El servidor  3000  esta corriendo")
});

app.use("/",rutasMain);
app.use(express.static("public"))
