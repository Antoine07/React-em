# Styles React

Vous pouvez définir une classe pour styliser un élément ou composant. Dans cas vous devez utiliser l'attribut "className" pour définir la classe de style(s).

```js
<div className="monStyleCss"> Bonjour le monde ! </div>

```

Vous pouvez également utiliser direcement des styles CSS sur un élément en utilisant l'attribut style dans React :

```js

const Message = (props) => {

  const myStyle = {
    color: 'green',
    backgroundColor: `#${props.color}`,
  }

  return (
      <div style={myStyle}>Hello World!</div>
  )
}

React.render( <Message color="194d33" />, container);

```

Pour les unités, voyez les exemples suivants :

```js
// React complète l'unité px
<div style={{ height: 10 }} ></div>

// Sinon vous pouvez préciser l'unité
<div style={{ height: '10rem' }} ></div>

```

## 1. Exercice shuffle d'une liste avec des styles

Vous allez mettre en place une liste d'utilisateurs avec un bouton "shuffle" pour mélanger la liste des users.

Au survol de chaque élément de la liste un mouseOver et un mouseOut seront mis en place pour changer les styles du background et color de chaque élément.

Structurez au maximun votre projet en composants. Vous partirez du code HTML dans le fichier template.html.

