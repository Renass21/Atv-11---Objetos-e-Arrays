/* 1. Considere o seguinte array: */
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
1290.00, 15000.00];
/* a. Imprima no console o índice do primeiro salário maior que
7.500 utilizando o findIndex*/ 

const maiorQue7500 = (salarios)=> salarios > 7500;

console.log(salarios.findIndex(maiorQue7500));


/*b. Crie uma nova lista filtrada com os salários que são maior que
8.000 utilizando o filter */
const maiorQue8000 = salarios.filter(salarios => salarios>8000)
console.log(maiorQue8000);

/* 2. James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são
normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
"Roxo"];
mas James tinha isto:
Usando somente o método splice insira as cores que faltam na array e
remova a cor "Preto", seguindo estes passos:
a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"  */
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

rainbow.splice(2,1);
rainbow.splice(2,0, 'Amarelo', 'Verde')
rainbow.splice(5,0, 'Roxo')
console.log(rainbow);

/* 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000 */ 

let usuariosCadastrados = [];

function cadastrarUsuario() {
    let nome = prompt("Digite o nome:");

    let idade = parseInt(prompt("Digite a idade:"));
    if (idade <=0) { 
        alert("Insira uma idade válida");
    };

    let trabalhando = confirm("Está trabalhando?");

    let salario;

    if (trabalhando === true) {
        salario = Number(prompt("Digite o salário ganho:"));
        if (salario <=0) { 
            alert("Insira um salário válido");
        };

    } else {
        salario = 0;
    }

    return { nome, idade, trabalhando, salario };
};

let continuar = true;

while (continuar === true) {
    usuariosCadastrados.push(cadastrarUsuario());

    continuar = confirm("Deseja continuar cadastrando? ");
};

const empregados = usuariosCadastrados.filter(usuario => usuario.trabalhando === true);
const maisDe2500 = empregados.filter(usuario => usuario.salario > 2500);
const menosDe2500 = empregados.filter(usuario => usuario.salario <= 2500);
const desempregados = usuariosCadastrados.filter(usuario => usuario.trabalhando === false);

console.log("Usuários empregados que recebem ACIMA DE R$2500:");
console.log(maisDe2500);

console.log("Usuários empregados que recebem R$2500 OU MENOS:");
console.log(menosDe2500);

console.log("Usuários desempregados:");
console.log(desempregados);