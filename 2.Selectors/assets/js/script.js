// // Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
// const elements = document.querySelectorAll(".important");
// console.log(elements);
// for(important of elements){
// important.setAttribute("title", "This is an important item.");
// }

// // Select all the img tags and loop through them. If they have no important class, turn their display property to none
// const img = document.querySelectorAll("img");
// console.log(img);
// for(image of img){
//     if(!image.classList.contains("important")){
//         image.style.display = "none";
//     }
// }

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
const parag = document.querySelectorAll('p'); 
console.log (parag);
for(paragraphe of parag){
    if(paragraphe.className){
        console.log(paragraphe.className);
    }
}

// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
const randParaColor = document.querySelectorAll("p");
for(paragraphe of randParaColor){
    if(paragraphe.className){
        paragraphe.style.color = "rgb(" + Math.random() * 265 + ", " + Math.random() * 265 + ", " + Math.random() * 265 + ")";
    }
}
