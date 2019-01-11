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
        {
            id: 3,
            term: "doei",
            definition: "goodbye",
            hint: "i hate to see you go",
        },
        {
            id: 4,
            term: "beterschap!",
            definition: "get well soon",
            hint: "no fun when you're feeling down",
        },
        {
            id: 5,
            term: "eén taal is nooit genoeg",
            definition: "one language is not enough",
            hint: "html, css, javascript...where does it end?",
        },
    ]
};


 /* todo 
1 - #declare and assing var. 
2 - # 1 eventlisten events - 
2.2- function & else if
3 - reassing variable 
4 - output the value - switch
5 - next card
6 - add more data points
*/




let index = Math.floor(Math.random() * data.termSets.length);



//declare all variableas
let currentCard = data.termSets[index];

let currentCardId = currentCard.id;
let currentCardTerm = currentCard.term;
let currentCardDefinition = currentCard.definition;
let currentHint = currentCard.hint;
let idCard


// console.log(currentCardId);
// console.log(currentCardTerm);
// console.log(currentCardDefinition);

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
    //update index number
    window.location.reload(true);

    let newIndex = Math.floor(Math.random() * data.termSets.length)
    console.log(newIndex);

    // if (newIndex === index) {
    //     newIndex = Math.floor(Math.random() * data.termSets.length)
    //     index = newIndex;
    //     console.log(index)
    // } 

    index = newIndex;
    currentCard = data.termSets[index];
    currentCardId = currentCard.id;
    currentCardTerm = currentCard.term;
    currentCardDefinition = currentCard.definition;
    currentHint = currentCard.hint;

    
};
