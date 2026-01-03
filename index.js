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
function person() {
    this.name = "Sardor",
    this.age = 21,
}