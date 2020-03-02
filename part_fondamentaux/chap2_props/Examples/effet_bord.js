

let tmp = 1 ;

function add(a, b){

    return (a + b)* tmp ;
}

console.log(add(8,7));

// plus tard dans mon script
tmp = 10; // mutable donc effet de bord dans la fonction ce n'est plus la même valeur
console.log(add(8,7));

// Pour éviter l'effet de bord on peut mettre la variable tmp en const :
// const tmp = 1;
