const prompt = require("prompt-sync")()

console.log("WELCOME TO YOUR POKEMON SELECTION [by Pietro Prata]\n")
let masterName = prompt("Tell me, what's your name? ")
let  masterChoice = parseInt(prompt("Select, from 1 to 5, which's gonna be your first Pokemon: "));
let chosenPokemon; 

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if ( masterChoice === 1) 
{
    chosenPokemon = "Bulbasaur";
} 
else if 
( masterChoice === 2 ) {
    chosenPokemon = "Charmander";
} 
else if 
( masterChoice === 3 ) {
    chosenPokemon = "Squirtle";
} 
else if 
( masterChoice ===  4) {
    chosenPokemon = "Pikachu";
} 
else
{
    chosenPokemon = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if (chosenPokemon) {
    console.log("You've chose " + chosenPokemon + " as your first Pokemon!\nCongrats and sucess on your journey, Pokemon Master!");
}