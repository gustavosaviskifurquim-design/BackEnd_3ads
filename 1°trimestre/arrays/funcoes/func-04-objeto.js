 // funções de retorno podem retornar objetos
 // chamados isso de 'função construtora'
 // isso permite criarmos várias instancias 
 // do mesmo objeto de forma dinãmica!

 function fabricarCarro(marca,modelo,montadora,motor){
    return {
        marca: marca,
        modelo: modelo,
        montadora: montadora,
        motor: motor
    }
 }
 const carro02={
    marca: 'BMW',
    modelo: 'm4 g80',
    montadora: 'bmw',
    motor:'v8 6.0'


 }
 const nissan = fabricarCarro("nissan","skiline r34","niss japão","rb26 320cv")
 const bmw = fabricarCarro("carro02.marca, carro02.modelo, carro02.montadora, carro02.motor")
 console.log("nissan")
 console.log("bmw")