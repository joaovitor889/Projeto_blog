const express = require("express");
const router = express.Router();

router.get("/categories", (req, res)=>{
    res.send("Rota de  categorias")
});

router.get("/adimin/categories/new", (req, res) =>{
    res.send("ROTA PARA  CRIAR UMA NOVA CATEGORIA")
})

module.exports =router;