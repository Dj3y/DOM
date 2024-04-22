// fonction qui renvoie les millisecondes depuis le 1 janvier 1970.
const _initTime = Date.now();
const displayedSquare = document.querySelector('.displayedsquare-wrapper');
const logAction = document.querySelector('ul');

// fonction pour calculet le temps à partir de _initTime
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

// fonction pour nous afficher la classe de l'élément sur lequel on clique ainsi que le temps écoulé
const clickOnSquare = (e) => {
    // On recupere la couleur
    var color = e.target.classList[1];
    // On crée la div et on lui ajoute les classes
    const newDiv = document.createElement('div');
    newDiv.classList.add('displayedsquare');
    newDiv.classList.add(color);
    // On ajoute la div crée dans la section
    displayedSquare.appendChild(newDiv);
    // On crée un li pour pouvoir afficher le temps d'éxecution
    const newLi = document.createElement('li');
    newLi.textContent = "Action done at " + getElapsedTime() + " created the " + color + " square.";
    logAction.appendChild(newLi);
    // Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
    alert("Clicked color " + color);
}

// on récupère tous les divs avec le nom de classe actionsquare
const actionSquares = document.querySelectorAll('.actionsquare');

// ajout d'un événement au moment du clique
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

// Add an event listener on the document <body>, listening for the keypress event.
// When the spacebar is hit randomly change the background color of the whole page
document.body.addEventListener('keypress', (e) =>{
    // e.key: récupère la valeur du bouton sur lequel on appuie dans ce cas il prend la valeur de la barre d'espace
    if (e.key === " "){
        const randomBodyColor = "rgb(" + Math.random() * 265 + ", " + Math.random() * 265 + ", " + Math.random() * 265 + ")";
        document.body.style.backgroundColor = randomBodyColor;
        // Log when the spacebar is used the same way you used for the generated squares.
        // creation d'un nouveau li 
        const keypressLi = document.createElement('li');
        keypressLi.textContent = "keypress at " + getElapsedTime();
        logAction.appendChild(keypressLi);
    }
    // When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
    else if (e.key === "l"){
        const logList = document.querySelector('ul');
        // tant que le premier enfant de ul existe la boucle va continuer à être éxecuté, donc elle va continuer à supprimer les enfants de ul
        while(logList.firstChild){
            logList.removeChild(logList.firstChild);
        }
    }
    // When the s key is pressed the squares get deleted (erases the generated squares)
    else if (e.key ==='s'){
        while(displayedSquare.firstChild){
            displayedSquare.removeChild(displayedSquare.firstChild);
        }
    }
} )