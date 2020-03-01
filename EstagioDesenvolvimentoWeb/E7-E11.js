/* Exercícios do E7 até o E11 */

const people = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

    console.log('#### Exercício 7 ####');
    for( let index = 0; index < people.length; index++){
        console.log(`Olá, ${people[index].nome[0].toUpperCase()}${people[index].nome.slice(1)} ${people[index].sobrenome}`);
    }
    
    console.log('#### Exercício 8 ####');
    const ageSum = people.reduce( (acumulador, ppl) => acumulador + ppl.idade, 0);
    console.log(ageSum); 
   
    console.log('#### Exercício 9 ####');
    const lessThen25 = people.filter(ppl => ppl.idade < 25)
    console.log(lessThen25);



    console.log('#### Exercício 10 ####');
    const lessThen30 = people.filter( ppl => ppl.idade < 30);
    console.log(lessThen30);
    
    console.log('#### Exercício 11 ####');
    const toCompare = (a, b) => {
       
        if(a.idade == b.idade){
           return b.id - a.id;
        }else{
            return b.idade - a.idade;
        }
       
     }
    people.sort(toCompare);
    console.log(people);
    

    
    
    

   
       
 