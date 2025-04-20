const express = require('express')
const app = express()
app.use(express.json())

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.json(baseDeObservacoes[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', (req,res)=>{
    const lembretesId = req.params.lembretesId
    const obsId = uuidv4()
    const{texto} = req.body
    const observacao = {
        id: obsId,
        lembretesId: lembretesId,
        texto: texto
    }
    const observacoes = baseDeObservacoes[lembretesId] || []
    observacoes.push(observacao)
    baseDeObservacoes[lembretesId] = observacoes
    res.status(201).json(observacoes)
})

const port = 5000
app.listen(port, ()=>{
    console.log(`Observações. Porta ${port}`)
})
