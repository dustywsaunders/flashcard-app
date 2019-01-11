const data = {
    termSets: [
        {
            id: 1,
            term: "gefeliciteerd",
            definition: "happy birthday",
            hint: "getting older is a happy occasion",
        },
        {
            id: 2,
            term: "prettig met je kennis te maken (kennismaken)",
            definition: "pleased to meet you",
            hint: "it is fun to make new friends",
        },
    ]
};






//declare all variableas
let index = Math.floor(Math.random() * data.termSets.length)
console.log(index);

let currentCard = data.termSets[index];

let currentCardId = currentCard.id;
let currentCardTerm = currentCard.term;
let currentCardDefinition = currentCard.definition;
let currentHint = currentCard.hint;

// console.log(currentCardId);
// console.log(currentCardTerm);
// console.log(currentCardDefinition);


/* todo 
1 - #declare and assing var. 
2 - # 1 eventlisten events - 
2.2- function & else if
3 - reassing variable 
4 - output the value - switch
5 - 
*/



function flipCard(event) {
    let idCard = event.target
     
    if (idCard.id === "term") {
        idCard.innerHTML = currentCardDefinition;
        idCard.setAttribute('id', 'definition')
        idCard = document.getElementById("definition");
        
    } else {
        
        idCard.innerHTML = currentCardTerm;
        idCard.setAttribute('id', 'term')
        idCard = document.getElementById("term");

    };
};

function nextCard() {
    currentCard = data.termSets[index]
}
