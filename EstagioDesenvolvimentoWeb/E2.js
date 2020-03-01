/*E.2 Crie uma função que recebe três argumentos, uma função e duas string, 
    aplique a função nas duas string e imprima o resultado. */

const twoArg = (string1, string2) => {

    return string1 + string2;
}

const threeArg = (func1, string1, string2) => {

    console.log(twoArg(string1, string2));
}

    console.log(twoArg('Seja ', 'bem vindo'));