
/* helper functions and variables*/
let counter = 0;
todoListsDelBtn = document.querySelectorAll("table tbody tr td .btn-danger");
todoListsEditBtn = document.querySelectorAll("table tbody tr td .btn-secondary");

let titlesTextarea = document.querySelectorAll(".title textarea");
let detailsTextarea = document.querySelectorAll(".details textarea");

let editTaskBtns = document.querySelectorAll(".edit-task-btn");

function get_all_notes() {
    return document.querySelectorAll("table tbody tr");
}

function delete_item(itemIndex) {
    /* remove parent of parent of node"element" */
    todoListsDelBtn[itemIndex].parentNode.parentNode.remove();
}

function addItem() {
    /* reading from input */
    itemName = document.querySelector("#todo-name").value;
    itemDescription = document.querySelector("#todo-description").value;
    if(itemName == "" || itemDescription == ""){
        alert("Please enter both name and description");
        return;
    }

    /* creating new tuple */
    tuple = document.createElement("tr");

    todoNum = document.createElement("th");
    todoNum.innerHTML = ++counter;
    todoNum.setAttribute("scope", "row");

    todoTitle = document.createElement("th");
    todoTitle.setAttribute("class", "title");
    let titleTextarea = document.createElement("textarea"); // Create the textarea
    titleTextarea.setAttribute("type", "text");
    titleTextarea.setAttribute("class", "form-control h-100");
    titleTextarea.readOnly = true;
    titleTextarea.value = itemName; // Set the value of the textarea
    todoTitle.append(titleTextarea); // Append the textarea to todoTitle

    todoDescription = document.createElement("th");
    todoDescription.setAttribute("class", "details");
    let detailsTextarea = document.createElement("textarea"); // Create the textarea
    detailsTextarea.setAttribute("type", "text");
    detailsTextarea.setAttribute("class", "form-control h-100");
    detailsTextarea.readOnly = true;
    detailsTextarea.value = itemName; // Set the value of the textarea
    todoDescription.append(detailsTextarea); // Append the textarea to todoTitle

    todoStatus = document.createElement("th"); 
    todoStatus.innerHTML= "in progress";

    todoDate = document.createElement("th");
    todoDate.innerHTML = "2023-07-25";

    todoAction = document.createElement("th");
    let delBtn = document.createElement("button");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("class", "btn btn-danger me-1");
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", () => {
        delete_item(counter-1);
    });
    let editBtn = document.createElement("button");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("class", "btn btn-secondary edit-task-btn");
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", () => {
        titlesTextarea[counter-1].removeAttribute('readonly');
        titlesTextarea[counter-1].focus();
        titlesTextarea[counter-1].classList.add("text-bg-secondary");
        titlesTextarea[counter-1].style.opacity = "62%";

        detailsTextarea[counter-1].removeAttribute('readonly');
        detailsTextarea[counter-1].classList.add("text-bg-secondary");
        detailsTextarea[counter-1].style.opacity = "62%";
    });
    todoAction.append(delBtn);
    todoAction.append(editBtn);

    tuple.append(todoNum);
    tuple.append(todoTitle);
    tuple.append(todoDescription);
    tuple.append(todoStatus);
    tuple.append(todoDate);
    tuple.append(todoAction);

    /* add tuple to table */
    document.querySelector("#todo_lists").append(tuple);
}
/* end of helper */

/* events */

for(let i=0;i<todoListsDelBtn.length;i++) {
    todoListsDelBtn[i].addEventListener("click", () => {
        delete_item(i);
    });
}

for(let i=0;i<editTaskBtns.length;i++){
    editTaskBtns[i].addEventListener("click", () => {
        titlesTextarea[i].removeAttribute('readonly');
        titlesTextarea[i].focus();
        titlesTextarea[i].classList.add("text-bg-secondary");
        titlesTextarea[i].style.opacity = "62%";

        detailsTextarea[i].removeAttribute('readonly');
        detailsTextarea[i].classList.add("text-bg-secondary");
        detailsTextarea[i].style.opacity = "62%";

        console.log("hello ", i);
    });

    // titlesTextarea[i].addEventListener("click", () => {
    //     console.log(`hello ${i}`);
    // });
}

/* End of events */