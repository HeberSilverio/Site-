"use strict";

// let propName = "age";

// let user = {
//   name: "John",
//   [propName]: 30 // A propriedade "age" é computada a partir da variável propName
// };

// console.log(user.age); // 30
// console.log(user[propName]); // 30
// console.log(typeof user.age); // number
// console.log(typeof user[propName]); // number
// console.log(typeof propName); // string

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   apple: "vermelha", // the name of the property is taken from the variable fruit
//   orange: "laranja"
// };

// let resposta = fruit;


// if (bag[fruit]) { 
//   alert( bag[fruit] );
// } else {  
//   bag[resposta] = "fruta sem cor";
// alert( resposta + " " + bag[resposta] ); 
// }
 
// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age,  // same as age: age
//     // ...
//   };
// }

// let user = makeUser("John", 30);
// console.log(user.name); // John



//Crie um objeto vazio user.
// let user = {};

// //Adicione a propriedade name com o valor John.
// user.name = "John 3.16";

// //Adicione a propriedade surname com o valor Smith.
// user.surname = "Deus amou o mundo";

// //Altere o valor de name para Pete.
// user.name = "John";

// //Remova a propriedade name do objeto.
// delete user.name;

// console.log(user);
// console.log(user.surname);

const person = {
  name: {
    first: "John",
    last: "Smith"
  },
  age: 25,
  bio: function() {
    return this.name.first + " " + this.name.last + " tem " + this.age + " anos.";
  },
  introduceSelf: function() {
    return "Olá! Meu nome é " + this.name.first + "!";
  }
};

// Atualizando as propriedades do objeto name
person.name.first = "Heber";
person.name.last = "Smith";

console.log(person.bio()); // John Smith tem 25 anos.
console.log(person.introduceSelf()); // Olá! Meu nome é John!
// console.log(person.name);
console.log(person["name"]["first"]);
// console.log(person.age);
// console.log(person.bio());
// console.log(person.introduceSelf());
// person.bio();
// person.introduceSelf();