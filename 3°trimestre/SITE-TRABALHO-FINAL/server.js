import express from 'express'
import path from "path"

const dirBase = import.meta.dirname
const app = express()
const porta = 3000
//Usar Middleware(Guardião)
app.use(express.static(path.join(dirBase, 'src/publico')))


// criar rotas do servidor 


app.get('/', (req, res) => {
    res.sendFile('src/paginas/index.html', { root: dirBase })
})

app.get('/produtos', (req, res) => {
    res.sendFile('src/paginas/produtos.html', { root: dirBase })
})

//liberar a porta do meu computador 
app.listen(porta, () => {
    console.log('servidor está vivo')
})

