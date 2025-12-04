
import readline from "readline-sync";
import { createPlayer } from "./utils/user.js";


function app(){
    console.log("welcome") 
    const name = readline.question("what is your name ")
    console.log(`Hello, ${name}!`);
    createPlayer(name)
   
        
        


}