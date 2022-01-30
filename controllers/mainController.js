const path = require("path")

const mainController={
    about:(req,res)=>{
        res.sendfile(path.resolve(__dirname,"../views/about.html"))
    },
    home:(req,res)=>{
    res.sendfile(path.resolve(__dirname,"../views/home.html"))
    }
}

module.exports =mainController;