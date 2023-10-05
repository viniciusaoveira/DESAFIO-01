// const exercicio1 = () => {
//   const dia = "não"
//   if (dia === "sim"){
//     console.log("Claro")
//   }
//   else{
//     console.log("Noite")
//   }
// }
// exercicio1()

// const exercicio2 = () => {
//   for (let i = 1; i <= 20; i +=1){
//     if (i % 2 === 0){
//       console.log(i)
//     }
//   }
// }
// exercicio2()

// const exercicio3 = () => {
//   console.log("Hello World!")
// }
// exercicio3()

// const exercicio4 = (nome) => {
//   console.log(nome)
// }
// exercicio4("Vinicius")

// const exercicio5 = (nome, idade, estiloMusical) => {
//   console.log(nome, idade, estiloMusical)
// }
// exercicio5("Vinicius", 26, "Pop")

// const exercicio6 = (filme, musica) => {
//   console.log(filme, musica)
// }
// exercicio6("Avengers - Ultimato", "Jamais Serão - Filipe Ret part Start")

// const exercicio7 = (i) => {
//   return i * 3
// }
// console.log(exercicio7(10))

// const exercicio8 = () => {
//   let i = true
//   if (i === true){
//     console.log("True")
//   }
//   else{
//     console.log("False")
//   }
// }
// exercicio8()

// const exercicio9 = () => {
//   let nomes = ["Vincius", "Filipe", "Raphael", "Andre", "Leonardo"]
//    console.log(nomes)
// }
// exercicio9()

// const exercicio10 = () => {
//   let nomes = ["Vincius", "Filipe", "Raphael", "Andre", "Leonardo"]
//     nomes.unshift("Hugo")
//     console.log(nomes)
// }
// exercicio10()

// const exercicio11 = () => {
//   let nomes = ["Vincius", "Filipe", "Raphael", "Andre", "Leonardo"]
//     nomes.pop()
//     console.log(nomes)
// }
// exercicio11()

// const exercicio12 = () => {
//   let nomes = ["Vincius", "Filipe", "Raphael", "Andre", "Leonardo"]
//   nomes.push("Larissa", "Camila")
//   console.log(nomes)
// }
// exercicio12()

// const exercicio13 = () => {
//   let nomes = ["Vincius", "Filipe", "Raphael", "Andre", "Leonardo"]
//   nomes.shift()
//   console.log(nomes)
// }
// exercicio13()

// const exercicio14 = () => {
//   let numeros = [7, 5, 6, 3, 8, 9, 2, 1, 4]
//     numeros.sort(function(a,b){
//       return a - b;
//     })
//   console.log(numeros)
// }
// exercicio14()

// const exercicio15 = () => {
//   const pessoa = {
//     nome: "Vinicius",
//     idade: 26,
//     cidade: "Rio de Janeiro",
//   }
//   console.log(pessoa)
// }
// exercicio15()

// const exercicio16 = () => {
//   const pessoa = {
//     nome: "Vinicius",
//     idade: 26,
//     cidade: "Rio de Janeiro",
//   }
//   pessoa.profissao = "Programador"
//   console.log(pessoa);
// }
// exercicio16()

// const exercicio17 = () => {
//   const pessoa = {
//     nome: "Vinicius",
//     idade: 26,
//     cidade: "Rio de Janeiro",
//   }
//   delete pessoa.idade
//   console.log(pessoa)
// }
// exercicio17()

// const exercicio18 = () => {
//   const pessoa = {
//     nome: "Vinicius",
//     idade: 26,
//     cidade: "Rio de Janeiro",
//   }
//   console.log(pessoa)
// }
// exercicio18()

// const exercicio19 = () => {
//   let cadastro = [
//     {
//     nome: "Vinicius",
//     idade: 26,
//     telefone: "21 97583-5734",
//     amigos: ["Filipe", "Raphael", "Andre", "Leonardo"],
//   },
//   {
//     nome: "Filipe",
//     idade: 30,
//     telefone: "21 93453-5734",
//     amigos: ["Vincius", "Raphael", "Andre", "Leonardo"],
//   },
//   {
//     nome: "Raphael",
//     idade: 24,
//     telefone: "21 93453-5734",
//     amigos: ["Vincius", "Filipe", "Andre", "Leonardo"],
//   },
//   {
//     nome: "Andre",
//     idade: 29,
//     telefone: "21 97853-5734",
//     amigos: ["Vincius", "Filipe", "Raphael", "Leonardo"],
//   },
//   {
//     nome: "Leonardo",
//     idade: 27,
//     telefone: "21 97853-4534",
//     amigos: ["Vincius", "Filipe", "Raphael", "Andre"],
//   }]
//   console.log(cadastro)
// }
// exercicio19()

const exercicio20 = () => {
  let cadastro = [
    {
      nome: "Vinicius",
      idade: 26,
      telefone: "21 97583-5734",
      amigos: ["Hugo", "Larissa", "Andre", "Vicente"],
    },
    {
      nome: "Filipe",
      idade: 30,
      telefone: "21 93453-5734",
      amigos: ["Gabriel", "Enzo", "Caio", "Pedro"],
    },
    {
      nome: "Raphael",
      idade: 24,
      telefone: "21 93453-5734",
      amigos: ["Willys", "Lucas", "Camila", "Gustavo"],
    },
    {
      nome: "Andre",
      idade: 29,
      telefone: "21 97853-5734",
      amigos: ["Victor", "Milton", "Lima", "Guilherme"],
    },
    {
      nome: "Leonardo",
      idade: 27,
      telefone: "21 97853-4534",
      amigos: ["Steffany", "Marilia", "Adriano", "Daniel"],
    },
    
  ]
  for (let i = 0; i < cadastro.length; i += 1){
    const primeiroAmigo = cadastro[i].amigos[0];
    console.log(primeiroAmigo)
  }
}
  exercicio20()