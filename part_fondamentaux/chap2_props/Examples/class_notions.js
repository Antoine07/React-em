

class Animal{

    who(){

        return 'Animal';
    }
}

let animal = new Animal();

console.log(animal.who());

class Lion extends Animal{

    speed(){
        return 100;
    }
}

let lion1 = new Lion;