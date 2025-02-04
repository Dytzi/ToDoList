toDoForm = document.querySelector("#toDoForm");
deck = document.querySelector('#toDoDeck');
let toDo = "";

console.log(toDoForm);
toDoForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    toDo = toDoForm.querySelector("input[type ='text']").value;
    toDoForm.querySelector("input[type ='text']").value = "";
    console.log(toDo);
    console.log(toDoDeck.innerHTML);
    createCard(toDo);
})

function createCard(toDo){
    //create a column to hold the card
    let column = document.createElement("div");
    column.classList.add('col-auto', 'limited');


    //create a card
    let card = document.createElement("div");
    card.classList.add("card",);

    //create a dynamic text
    let text = document.createElement("p");
    text.textContent = toDo;

    //create a button
    let button = document.createElement("input");
    button.type = "button";
    button.value = "X";

    //create a stretched link
    let sLink = document.createElement("a");
    sLink.classList.add("btn","stretched-link");

    card.appendChild(text);
    card.appendChild(sLink)
    card.appendChild(button);

    column.appendChild(card)


    button.addEventListener("click", () => column.remove())
    sLink.addEventListener("click",() => cross(text))

    deck.appendChild(column);
}

function cross(text){
    if(text.style.textDecoration === "line-through"){
        text.style.textDecoration = "";
    }else{
        text.style.textDecoration = "line-through";
    }
}

