// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function greet(person){
return "Hey, " + person;
}

let user = "Noor";

document.body.innerHTML = greet(user);