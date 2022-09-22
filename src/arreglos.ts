const nombres: string[] = [];



const imprimirNombres = () => {

nombres.push('Juan Perez')
nombres.push('Elias Zavala')

for (let index = 0; index < nombres.length; index++) {
    console.log(`Nombre: ${nombres[index]}`)
    
}

}

const contarPosiciones = () => {
    console.log(`La cantidad de nombres es: ${nombres.length}`)
}


export {imprimirNombres, contarPosiciones}