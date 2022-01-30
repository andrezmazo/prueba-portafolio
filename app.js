const express= require("express");
const app = express();
const rutasMain = require ("./routers/main")

app.listen(process.env.PORT||3000, function() {
    console.log('Servidor funcionando');
});

app.use("/",rutasMain);
app.use(express.static("public"))
