// Aula 02
const { select } = require("@inquirer/prompts");

const start = async () => {

  while (true) {

    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar Meta",
          value: "cadastrar",
        },
        {
          name: "Sair",
          value: "Sair",
        },
      ],
    });
    switch (opcao) {
      case "cadastrar":
        console.log("Vamos cadastrar")
        break
      case "listar":
        console.log("Vamos listar")
        break
      case "sair":
        console.log("Até a próxima!")
        return;
    }
  }
};

start()

// const start = () => {
//   while(true){
//     let opcao = "sair"
//     switch(opcao) {
//       case "cadastrar" :
//         console.log("Vamos cadastrar")
//         break
//       case "listar" :
//         console.log("Vamos listar")
//         break
//         case "sair" :
//           return
//     }
//   }
// }

// start ()
// const start = () => {
//   let count = 0
//   while(count < 10){
//     console.log(count)
//     count = count +1
//   }
// }

// start ()
// Criando function
// function start() {
//   console.log('comecou')
// }

// start()

// Aula 01
// helo world
// console.log(1+1)
