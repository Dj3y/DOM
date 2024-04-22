// Display the document title in the console
console.log(document.getElementsByTagName('title'));
let title = document.getElementsByTagName('title')[0].innerHTML;
console.log(title); 

// Change the document title to Modifying the DOM
document.title = "Modifyibg the DOM";

// Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
document.body.style.backgroundColor = '#FF69B4';
// test pour modifier la couleur du h1
// document.getElementsByTagName('h1')[0].style.color = "white";

// Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)
const body = document.body.children;
console.log(body);
for( const element of body){
    console.log(element);
}