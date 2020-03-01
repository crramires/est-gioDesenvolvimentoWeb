/* E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.*/


const stringLength=(string1, string2)=>{
    if( string1.length > string2.length){
        return string1;
    }else{
        return string2;
    }

}
const string1 = 'Seja';
const string2 = 'Bem vindo';

console.log(stringLength(string1, string2));