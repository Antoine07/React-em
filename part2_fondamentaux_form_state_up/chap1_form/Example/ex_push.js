

let users = [];
// Attention un push ne renvoie pas le tableau lui-même
users.push('Alan') ;
console.log( users )

this.state.users.push('Alan'); //

this.setState({ users : this.state.users });

// exemple de ternaire

this.state.message === '' ? null : this.state.message;
