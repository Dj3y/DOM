//Select the last child of the <ol> tag and put it at the beginning of the list
// Select the tag ol
var ol = document.querySelector('ol');
// Select the first Child
var firstChild = ol.children[0];
// Select the last Child
var lastChild = ol.children[4];
/* insertBefore needs two arguments
 - first the element to insert 
 - second the element before which we insert the element*/
ol.insertBefore(lastChild, firstChild);

//Move the <h2> of the third section in the second one and vice-versa
// In the two solutions we need a temporary variable for store the varent of the variable
// FIrst SOLUTION
var main = document.querySelector('main');
var mainChildren = main.children;
var secondSection = main.children[1];
var secondSectionH2 = secondSection.children[0];
var thirdSection = main.children[2];
var thirdSectionDiv = thirdSection.children[0];
console.log(thirdSectionDiv);
var thirdSectionH2 = thirdSectionDiv.children[0];
var tempVar = thirdSectionH2.innerHTML;
thirdSectionH2.innerHTML = secondSectionH2.innerHTML;
secondSectionH2.innerHTML = tempVar;
// SECOND SOLUTION
// var allH2 = document.querySelectorAll('section h2');
// console.log(allH2);
// var tempVar = allH2[1].innerHTML;
// console.log(tempVar);
// allH2[1].innerHTML = allH2[2].innerHTML;
// allH2[2].innerHTML = tempVar;

//Delete the last section from the DOM, we don't need it anyways
var allSection = document.querySelectorAll('section');
var lastSection = allSection[2];
lastSection.remove();
