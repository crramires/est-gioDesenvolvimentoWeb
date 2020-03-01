/*E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos */

const handleMerge = (...values) => {
    console.log(values)
}

console.log(handleMerge('seja', 'bem', 'vindo'));