// 1. Liste os números de 0 a 10 no console;

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < number.length; i++) {
    console.log('o número é ${number[i]}')
}

// 2. Some somente os valores ímpares de uma lista de números;

function odd(item) {
    return item % 2 !== 0;
}

const numberOdd = number.filter(odd);

function addAll(accumulator, currentItem) {
    return accumulator + currentItem
}

const result = numberOdd.reduce(addAll);
console.log(result);


// 3. Liste a tabuada do 6 (do 1 ao 10);

for (let i = 1; i < number.length; i++) {
    let result = 0;
    result = number[i] * 6;
    console.log(`${number[i]} x 6 = ${result}`);
}


// 4. Crie uma lista de notas de provas;

const gradeValue = [0.5, 9.8, 6.0, 10.0]


// 5. Some as todas as notas da lista de provas;

function addGrade(accumulator, currentItem) {
    return accumulator + currentItem
}

const resultGrade = gradeValue.reduce(addGrade);

console.log(resultGrade)

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);

const supermarketList = [{

    name: 'Bolacha Oreo',
    bougth: true,
    price: 2.50
},
{

    name: 'Cerejas',
    bougth: true,
    price: 85.60
},
{

    name: 'Melancia',
    bougth: false,
    price: 5.80
},
{

    name: 'Channel',
    bougth: false,
    price: 500
},
{

    name: 'Morango',
    bougth: true,
    price: 5.20
}
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

function bougthTrue(item) {
    return item.bougth == true;
}

const bougth = supermarketList.filter(bougthTrue)
console.log(bougth)

// JS Moderno
const bougth = supermarketList.filter(item => item.bougth == true)

// 8. Some o total dos valores de itens da lista do mercado.

function addValue(item) {
    return item.price;
}

const resultAll = supermarketList.map(addValue)
console.log(resultAll)


// soma dos prices

function valueResult(accumulator, currentItem) {
    return accumulator + currentItem
}

const result = resultAll.reduce(valueResult);

console.log(result)



// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

function nameList(item) {
    return item[0] == 'A'; // [0] indica que a letra observada está na primeira posição, vai olhar todo o array e ver se o nome é == 'A' e retornar somente os nomes com a inicias que socilitamos.
}

const listNameA = nomes.filter(nameList)
console.log(listNameA)


///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const confeitoAberto = (confeito[0].substr(2, 1)); // 0 [0] indica que passa essa função no index 0, que nesse caso é o único.


const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${confeitoAberto}`);
    }
}

console.log(pessoa.comer(confeito))