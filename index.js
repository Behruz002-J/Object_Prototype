//1-daraja:Prototip va Voris
//1----
const Animal = {
    this:"Animal",
    eat() {
        console.log("Animal is eating");        
    }
};
    const Dog = Object.create(Animal);
  
    Dog.type = "Kuchuk";
    Dog.bark = function() {
        console.log("Dog is kuchuk");
        
    }
    Dog.eat();
    Dog.bark();

    //2----
    