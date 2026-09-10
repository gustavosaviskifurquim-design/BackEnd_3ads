    import express from 'express'
const app = express()
const porta = 3000

// criar rotas do servidor 
    app.get('/', (req, res) => {
    res.send(olá, abacaxi)
    })

    app.get('/', (req, res) => {
    res.send('/paginas/index.html', {root:import.meta.dirname})
    })

    //liberar a porta do meu computador 
    app.listen(porta, () => {console.log('servidor está vivo')
    })
    
    