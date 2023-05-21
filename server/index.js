const express = require("express")
const router = require("./userServe/routes")
const cors = require("cors")
const server = express()

server.use(cors())
server.use(express.json())
server.use("/api", router)

server.listen(3001, () => console.log("Servidor rodando"))