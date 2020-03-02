

class Animal{

    // méthode exécutée à la création d'un objet Animal
    // Attention vous ne pouvez avoir qu'un constructeur par classe.
    constructor(props){
        console.log(props, "1");
    }

    who(){

        return 'Animal';
    }
}

// si il y a un constructeur dans la classe Animal alors il automatiquement exécuté
// 
let animal = new Animal("Je suis la classe Animal");

console.log(animal.who());

// héritage
class Lion extends Animal{

    constructor(props){
        super(props);// execute le constructeur parent
        console.log(props, "2")
    }

    speed(){
        return 100;
    }
}

let lion1 = new Lion('Je suis un lion...');

console.log(lion1.speed());
console.log(lion1.who());
