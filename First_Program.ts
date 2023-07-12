let message: string = 'name';
console.log(message);
console.log('Dinesh'.length); 

let counter: number;
counter = 13;
console.log(counter);

let names:string[]=['dinesh','nerthee','joshvik','34','31','3'];
let person:{name:string,age:number;}
person = {name:'dinesh',age:34};
console.log(names);
console.log(person);

let greeting:(name:string) => string;
greeting =function(name:string){return 'Hi ${name}';};
console.log(greeting('dinesh'));
