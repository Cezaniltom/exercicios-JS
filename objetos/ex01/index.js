// 1. Criando uma lista de contatos

// Crie uma lista de contatos, essa lista deve ter o seguintes dados, (minimo 12 contatos)

// - Nome
// - Telefone
// - Endereço
//     - Nome da rua
//     - Número da residência
//     - Nome do bairro
// - Data de nascimento



const contatos = [
    {
        nome: "Ana Souza",
        telefone: "(11) 98765-4321",
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            bairro: "Jardim das Rosas"},
        dataNascimento: "15/03/1985"
    },
    {
        nome: "Carlos Silva",
        telefone: "(21) 97654-3210",
        endereco: {
            rua: "Avenida Brasil",
            numero: 456,
            bairro: "Centro"
        },
        dataNascimento: "22/07/1978"
    },
    {
        nome: "Fernanda Lima",
        telefone: "(31) 91234-5678",
        endereco: {
            rua: "Rua das Acácias",
            numero: 789,
            bairro: "Vila Nova"
        },
        dataNascimento: "10/11/1990"
    },
    {
        nome: "João Pereira",
        telefone: "(41) 99876-5432",
        endereco: {
            rua: "Rua das Palmeiras",
            numero: 321,
            bairro: "Bairro Alto"
        },
        dataNascimento: "05/02/1982"
    },
    {
        nome: "Mariana Oliveira",
        telefone: "(51) 92345-6789",
        endereco: {
            rua: "Rua São Pedro",
            numero: 654,
            bairro: "São José"
        },
        dataNascimento: "30/09/1988"
    },
    {
        nome: "Ricardo Mendes",
        telefone: "(61) 94567-8901",
        endereco: {
            rua: "Rua das Orquídeas",
            numero: 987,
            bairro: "Parque das Águas"
        },
        dataNascimento: "20/06/1975"
    },
    {
        nome: "Juliana Costa",
        telefone: "(71) 93012-3456",
        endereco: {
            rua: "Rua do Sol",
            numero: 432,
            bairro: "Alto da Boa Vista"
        },
        dataNascimento: "13/04/1995"
    },
    {
        nome: "Pedro Almeida",
        telefone: "(81) 96789-0123",
        endereco: {
            rua: "Avenida das Américas",
            numero: 210,
            bairro: "Jardim São Paulo"
        },
        dataNascimento: "08/12/1980"
    },
    {
        nome: "Camila Santos",
        telefone: "(91) 98712-3456",
        endereco: {
            rua: "Rua das Magnólias",
            numero: 876,
            bairro: "Jardim das Laranjeiras"
        },
        dataNascimento: "25/01/1987"
    },
    {
        nome: "Gabriel Rocha",
        telefone: "(11) 99823-4567",
        endereco: {
            rua: "Rua dos Cedros",
            numero: 543,
            bairro: "Vila das Oliveiras"
        },
        dataNascimento: "17/08/1992"
    },
    {
        nome: "Tatiane Lima",
        telefone: "(21) 98901-2345",
        endereco: {
            rua: "Rua das Samambaias",
            numero: 678,
            bairro: "Bosque dos Eucaliptos"
        },
        dataNascimento: "12/10/1983"
    },
    {
        nome: "Lucas Martins",
        telefone: "(31) 92345-6789",
        endereco: {
            rua: "Avenida das Palmeiras",
            numero: 345,
            bairro: "Vila Industrial"
        },
        dataNascimento: "19/05/1986"
    }
    
  ];
  

// 2. Percorrendo a lista de contato

// Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contendo Nome, Telefone, Endereço e data de nascimento, exemplo:

// Bonus: Utilizar template string


for (let i = 0; i < contatos.length; i++) {
    
        console.log(`Boa noite ${contatos[i].nome}, de número ${contatos[i].telefone} e que mora na ${contatos[i].endereco.rua}, ${contatos[i].endereco.numero}, ${contatos[i].endereco.bairro} com data de nascimento no dia ${contatos[i].dataNascimento}`);
    
}