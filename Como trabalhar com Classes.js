class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, o meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está realizando suas atividades como ${this.cargo}.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, 'Desenvolvedor');
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

const gerente1 = new Gerente('Italo', 35, 'TI');
const desenvolvedor1 = new Desenvolvedor('Victor', 22, 'JavaScript');

gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

desenvolvedor1.seApresentar();
desenvolvedor1.trabalhar();
desenvolvedor1.programar();
