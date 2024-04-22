// Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
const section = document.createElement("section");
document.getElementsByTagName("h2").appendChild(section);
const learners = ["Ludovic", "Justine F", "Jordan", "Adrien C", "Tom D", "Arnaud", "Dorian", "Mohamed","Youris R", "Manu C", "Caroline", "Giovanni T", "Iliess A", "Dylan", "Isabelle", "Stacy", "Adrien B", "Nathanaël A", "Denis", "Angel", "Nataliia", "Julie", "Zahra", "Lyne", "Maryam"];
learner.forEach(showLearner);
function showLearner(learner){
    for(learner of learners){
        const parag = document.createElement("p");
        document.getElementsByTagName("section").appendChild(parag);
        learner.style.backgroundColor = Math(random)*265;
    }
}