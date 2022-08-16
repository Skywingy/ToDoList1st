//To do constructor
function render(){

    //ToDo constructor
    function createToDo (Title, Description, DueDate) {
        return {
            Title: Title,
            Description: Description,
            DueDate: DueDate,
            }
        }
    
    //ToDo storer
    let myStorer = [{
    Title: "Push-Up",
    Description: "100 times nonstop",
    DueDate: "2222-12-12",
    },
    {
    Title: "Pull-Up",
    Description: "10 times no break",
    DueDate: "2222-10-22",
    },
    {
    Title: "Wake-up early",
    Description: "at 08:00",
    DueDate: "2222-09-03",
    },
];

addToDoToStorer();

    //ToDo pusher
    function addToDoToStorer(Title, Description, DueDate) {
    let toDo = createToDo(Title, Description, DueDate);
    console.table("Hereee", toDo);
    myStorer.push(toDo);
    console.table("store", myStorer);
    renderto();
    }

function renderto() {
        const books = document.querySelector(".lists");

    //Removes the same card when new card adds
    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    let index = 0;
    myStorer.forEach(myStorers => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("id", "cards");
            books.appendChild(card);

    // creates remove button on the card
    const removeB = document.createElement("BUTTON");
    removeB.classList.add("removeB");
    const textB = document.createTextNode("Remove");
    removeB.dataset.linkedArray = index;
    
    removeB.appendChild(textB);
    card.insertBefore(removeB, card.lastElementChild);
    removeB.addEventListener("click", removeBu);


    

    function removeBu() {
        let retBookFromLib = removeB.dataset.linkedArray;
        myStorer.splice(parseInt(retBookFromLib), 1);
        card.remove();
        renderto();
    }

    for (let key in myStorers) {
        const para = document.createElement("p");
        para.classList.add("parc");
        para.textContent = (`${key}:  ${myStorers[key]}`);
        card.insertBefore(para, card.children[0]);
    
    }
    index++;  
})
    
    }
    const addBookButton = document.getElementById("addTask");
    addBookButton.addEventListener("click", displayTheForm);
    addBookButton.addEventListener("click", noneButton);
    
    //displays the form when clicked add task
    function displayTheForm() {
    document.getElementById("addToDo").style.display = "flex";
    };
    
    function noneButton() {
    document.getElementById("addTask").style.display = "none";
    }
    
    //intake form data into myLibrary array
    const submitButton = document.getElementById("submitB");
    var text = document.createTextNode("Add to List");
    submitButton.appendChild(text);
    submitButton.addEventListener("click", intakeFormData);
    submitButton.addEventListener("click", undDisplayTheForm);
    submitButton.addEventListener("click", onButton);
    submitButton.addEventListener("click", renderto);
    
    function intakeFormData(event) {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;

    
    
    if ((Title == "") || (Description == "") || (DueDate == "")) {
        return;
    }
    
    addToDoToStorer(Title, Description, DueDate);
    document.getElementById("addToDo").reset();
    event.preventDefault();

    };
    
    
    function undDisplayTheForm(event) {
    document.getElementById("addToDo").style.display = "none";
    event.preventDefault();
    }
    
    function onButton() {
    document.getElementById("addTask").style.display = "";
    }

    localStorage.setItem('myStorer', JSON.stringify(myStorer));
    localStorage.getItem('myStorer');

    console.log("hi", myStorer);
    renderto();
    
} 



    
    
export { render as renderForm };