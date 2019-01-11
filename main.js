const data = {
    termSets: [
        {
            id: 1,
            term: "gefeliciteerd",
            definition: "happy birthday",
        },
        {
            id: 2,
            term: "prettig met je kennis te maken (kennismaken)",
            definition: "pleased to meet you",
        },
    ]
};


const currentCardId = data.termSets[0].id;
const currentCardTerm = data.termSets[0].term;
const currentCardDefinition = data.termSets[0].definition;
console.log(currentCardId);
console.log(currentCardTerm);
console.log(currentCardDefinition);



/* todo 
1 - #declare and assing var. 
2 - # 1 eventlisten events - 
2.2- function & else if
3 - reassing variable 
4 - output the value - switch
5 - 
*/

function flipCard(event){
    let idCard = event.target
    
    console.log(idCard)    
    if (idCard.id === "term") {
        idCard.innerHTML = currentCardDefinition;
        idCard.setAttribute('id', 'definition')
        idCard = document.getElementById("definition");
        console.log("Step 01" + idCard);
        
    } else {
        
        idCard.innerHTML = currentCardTerm;
        idCard.setAttribute('id', 'term')
        idCard = document.getElementById("term");
        console.log("Step 2 works");

    };
};
