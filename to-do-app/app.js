// DOM
var toDoAddInput = document.querySelector("#to-do-add-input")
var toDoAddButton = document.querySelector("#to-do-add-btn")
var toDoUl = document.querySelector(".to-do-ul")
var completedUl = document.querySelector(".completed-ul")

// Sayac
var sayac = 3

// DATA
var toDoData = [
    {
        id: `0`,
        value: "Digital Clock",
        status: "completed"
    },
    {
        id: `1`,
        value: "BMI Calculator",
        status: "completed"
    },
    {
        id: `2`,
        value: "To Do App",
        status: "to-do"
    },
]

class UI {

    createLiToDo(value) {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = `
        <button type="checkbox" onclick="changeToStatues(this)">
        <i class="fa-solid fa-square-check"></i>
        </button>
        <textarea id="to-do-text-area">
        ${value}
        </textarea>
        <button class="to-do-save" onclick="saveToDo(this)">
            <i class="fa-solid fa-bookmark" ></i>
        </button>
        <button class="to-do-delete" onclick="deleteThis(this)">
            <i class="fa-solid fa-delete-left"></i>
        </button>
        `
        return liDOM
    }

    createLiCompleted(value) {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = `
        <textarea id="completed-text-area">
        ${value}
        </textarea>
        <button class="completed-save" onclick="saveCompleted(this)">
            <i class="fa-solid fa-bookmark" 
            ></i>
        </button>
        <button class="completed-delete" onclick="deleteThis(this)">
            <i class="fa-solid fa-delete-left"></i>
        </button>
        `
        return liDOM
    }

    fillToData() {
        // Temizlik..
        toDoUl.innerHTML = ``
        completedUl.innerHTML = ``

        // Veriyi dolduruyoruz
        for (let i = 0; i < toDoData.length; i++) {
            if (toDoData[i].status == "to-do") {

                let liDOM = this.createLiToDo(toDoData[i].value)
                liDOM.id = toDoData[i].id
                toDoUl.appendChild(liDOM)
            }
            else if (toDoData[i].status == "completed") {
                let liDOM = this.createLiCompleted(toDoData[i].value)
                liDOM.id = toDoData[i].id
                completedUl.appendChild(liDOM)
            }
        }
    }

    pushToData() {
        let oneData = {
            id: `${sayac}`,
            value: toDoAddInput.value,
            status: "to-do"
        }
        if (oneData.value) {
            toDoData.push(oneData)
            let myUI = new UI()
            myUI.fillToData()
            toDoAddInput.value = null
            sayac++
        }
        else {
            console.log("Boş Giriş")
        }
    }

}

function changeToStatues(e) {
    let liID = e.parentElement.id
    let index = toDoData.findIndex(x => x.id == liID);
    toDoData[index].status = "completed"
    let myUI = new UI()
    myUI.fillToData()
}
function deleteThis(e) {
    let liID = e.parentElement.id
    let index = toDoData.findIndex(x => x.id == liID);
    toDoData[index].status = "history"
    console.log("Datada duruyor ama app ekranında gözükmüyor.")
    console.log(toDoData)
    let myUI = new UI()
    myUI.fillToData()
}
function saveToDo(e) {
    let newValue = e.parentElement.children[1].value
    toDoData[e.parentElement.id].value = newValue
    let myUI = new UI()
    myUI.fillToData()

}
function saveCompleted(e) {
    let liID = e.parentElement.children[0].value
    console.log(liID)
}



function appRun() {
    let myUI = new UI()
    myUI.fillToData()
    toDoAddButton.addEventListener("click", myUI.pushToData)
}
appRun()
