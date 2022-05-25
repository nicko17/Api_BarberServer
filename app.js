require("dotenv").config()
const express = require("express")
const  cors = require("cors")
const app = express()
const { dbConnectMysql } = require("./config/mysql")

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 7000

//Invocacion de las rutas
app.use("/api", require("./routes/cliente"))
app.use("/api", require("./routes/trabajador"))
app.use("/api", require("./routes/citas"))
app.use("/api", require("./routes/servicios"))
app.use("/api", require("./routes/categoria"))
app.use("/api", require("./routes/auth"))  

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`)
})

dbConnectMysql()