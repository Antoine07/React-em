
class Product{

    getTva(){
        return this.tva;
    }

    setTva(tva){
        this.tva = tva;
    }

    constructor(price){
        // le this se réfère à l'objet pas à la classe
        this.tva = .2 ;
        this.price = price;
        console.log('constructor')
    }
}

let p1 = new Product(12.5);

console.log(p1.getTva());
p1.setTva(.05)

console.log(p1.getTva())

console.log(p1.price);

/* -------------------------------------------------- */

let p2 = new Product(15);

console.log(p2.getTva())

console.log(p2.price);

/* ----------------------------------------- */

class Rectangle{

    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea(){
        return this.height * this.width;
    }
}

class Square extends Rectangle{

    // on redéfinit le constructor parent
    constructor(c){
        // on appelle le constructor parent
        super(c, c);
    }

}

let r1 = new Rectangle(10,5);

console.log(r1.getArea());

let sq1 = new Square(5);
let sq2 = new Square(15);


console.log(sq1.getArea());

/* ---------------------------------------------------------  */

class Computer{

    constructor(ram1, ram2){
        this.ram1 = ram1;
        this.ram2 = ram2;
    }

    getRam(){
        return this.ram1 + this.ram2 ;
    }
}

class XPS extends Computer{

    constructor(ram){
        super(ram, ram);
    }
}

let xps1 = new XPS(500);
console.log('memoire xps 1', xps1.getRam());
let xps2 = new XPS(1500);
console.log('memoire xps 2', xps2.getRam());


/* -------------------------------------- */

function foo(){

    console.log(this)
}

foo()

const bar = () => {
    console.log(this)
}

bar();

/* ------------- DANS REACT */

class Click extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    click1(){
        // undefined this.props
        console.log(this.props)
    }

    click2 = () =>{
        // ça marche car this se réfère au this de la classe CONTEXTE pour la fonction fléchée.
        console.log(this.props)
    }

    render(){

        // React monte le button dans le DOM
        // lorsque React exécute la fonction click il ne se réfère pas au this de la classe
        // car il exécute la fonction dans le contexte du DOM
        // La solution c'est de créer une fonction fléchée pour le click
        // car celle-ci récupère le this du contexte dans lequel elle a été définie
        return(
            <React.Fragment>
                <button onClick={this.click1}> Click me </button>
                <button onClick={this.click2}> Click me </button>
            </React.Fragment>
        )
    }

}