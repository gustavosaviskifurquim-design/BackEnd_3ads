// Array (separados por virgula)
const carros = ['camaro', 'mustang', 'audi']
            //     1          2         3
console.log(carros[33]) // underfined

for (carro of carros) {
    console.log('carro: '+ carro)
}