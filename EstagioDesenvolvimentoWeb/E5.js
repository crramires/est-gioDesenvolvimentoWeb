/* E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.*/

const dictionary = {4: 'a', 3: 'e', 1: 'i', 5: 's'}; 
const str = 'T35t3 d3 35t4g1o' 
const newStr = Array(); 

 for(let index = 0; index < str.length; index++){
    const letter = str[index];
    newStr[index] = letter;

    if(dictionary[letter]){
        newStr[index] = dictionary[letter];
    }
}
console.log(newStr);

