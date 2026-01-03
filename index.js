//1-daraja:Prototip va Voris
//1----
// const Animal = {
//     this:"Animal",
//     eat() {
//         console.log("Animal is eating");        
//     }
// };
//     const Dog = Object.create(Animal);
  
//     Dog.type = "Kuchuk";
//     Dog.bark = function() {
//         console.log("Dog is kuchuk");
        
//     }
//     Dog.eat();
//     Dog.bark();

    //2----
   class human  {
  speak() {
    console.log("bola o'rganyapti");
  }
};
   
     class Bola extends human {
         u(){
            console.log("bola vanihoyat gapiryapti");
            
        }
     }
const child = new Bola();
child.speak();
child.u();

//3----
let exampleObj = {};
exampleObj.name = "Abror";
exampleObj.age = 32;
let result = exampleObj.hasOwnProperty("age");
console.log(result);

//4----
function parent() {
    this.name = "Doniyor";
    this.age = 43;
}
function mashina(name,age) {
    this.name = name;
    this.age = age;
}

const m1 = new mashina("Toyota", 21);
const m2 = new mashina("BMW", 2);
mashina.prototype.parent = function () {
    console.log("Meni yoshim" + this.age);
    
}
m1.parent();
m2.parent();
console.log(Object.getPrototypeOf(m1));

//5----
