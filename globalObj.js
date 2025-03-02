
const originalAlert = window.alert;
const originalPrompt = window.prompt;
const originalConfirm = window.confirm;

window.alert = (message) => originalConfirm(message); 
window.prompt = (message) => originalAlert (message); 
window.confirm = (message, def) => originalPrompt(message, def); 

window.alert('Confirm or not?');

const userInput = window.prompt('This is an alert');

const isConfirmed = window.confirm('Enter your name:','Arina');