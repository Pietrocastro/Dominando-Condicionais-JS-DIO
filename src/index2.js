const prompt = require("prompt-sync")()

console.log("WELCOME TO YOUR POKEMON SELECTION [by Pietro Prata]\n")
let masterName = prompt("Tell me, what's your name? ")
let  masterChoice = parseInt(prompt("Select, from 1 to 5, which's gonna be your first Pokemon: "));
let chosenPokemon; 

switch(masterChoice){
    case 1:
    chosenPokemon = "Bulbasaur"
    break
    
    case 2:
    chosenPokemon = "Charmander"
    break;

    case 3:
    chosenPokemon = "Squirtle"
    break;
    
    case 4:
    chosenPokemon = "Pikachu"
    break
    
    case 5: 
    chosenPokemon = "Mewtwo"
    break

    default:
    // Tratar caso o usuário digite um número fora do intervalo esperado
    console.log("Invalid choice. Please choose a number between 1 and 5.");
}

//Imprime o Pokémon escolhido:
if (chosenPokemon) {
    console.log("You've chose " + chosenPokemon + " as your first Pokemon!\nCongrats and success on your journey, Pokemon Master!");
}
