    import express from 'express'
    import path from 'path'
const dirBase = import.meta.dirname   
const app = express()
const porta = 3000
//Usar Middleware(Guardião)
app.use(express.static(path.join(dirBase, 'publico')))


// criar rotas do servidor 
    app.get('/', (req, res) => {
    res.send(olá, abacaxi)
    })

    app.get('/', (req, res) => {
    res.sendFile('/paginas/index.html', {root:dirBase})
    })

    //liberar a porta do meu computador 
    app.listen(porta, () => {console.log('servidor está vivo')
    })
    
    