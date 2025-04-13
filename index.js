//localhost: 4000/lembretes
//endpoint: método do protocolo HTTP, padrão de acesso, funcionalidade
const express = require("express")
const app = express()
app.use(express.json())
const baseDeLembretes = {}
let id = 1
//GET /lembretes (req, res) => {}
app.get('/reminders', (req, res) => {
    res.json(baseDeLembretes)
})

app.post('/reminders', (req, res) => {
    const texto = req.body.texto
    const reminders = {
        id: id,
        texto: texto
    }
    baseDeLembretes[id] = reminders
    id += 1
    res.json(baseDeLembretes)
})

const port = 4000
app.listen(port, () => {
    console.log(`Reminders. Port ${port}`)
})
