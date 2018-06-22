require("./main.css");
require("./bootstrap/css/bootstrap.min.css");


class ToDoApp {
  constructor() {
    // array of objects
    this.tasksArray = [];
    this.date = new Date().toString();

    const databutton = document.getElementById("push_data");
    if (databutton) {
      databutton.addEventListener("click", (eventObject) => { this.pickData(eventObject); });
    }
  }

  addDate() {
    // add date to banner
    this.date = this.date.slice(0, 15);
    const Pdate = document.getElementById("date");
    Pdate.innerHTML += this.date;
  }


  // pick data from html to array
  pickData(event) {
    const table = document.getElementById("tasksTable");
    event.preventDefault();
    const inputTaskName = document.getElementById("taskName").value;
    const inputTime = document.getElementById("taskTime").value;

    // create object
    const obj = {
      status: "active",
      name: inputTaskName,
      time: inputTime,
    };

    this.tasksArray.push(obj);

    let cellPosition = 0;
    const tableRow = table.insertRow(this.tasksArray.length - 1);
    tableRow.insertCell(cellPosition).innerHTML = `<button class='btn btn-success btn-sm'><span class='badge'>${this.tasksArray[this.tasksArray.length - 1].status}</span></button>`;

    cellPosition += 1;
    tableRow.insertCell(cellPosition).innerHTML = this.tasksArray[this.tasksArray.length - 1].name;

    cellPosition += 1;
    tableRow.insertCell(cellPosition).innerHTML = this.tasksArray[this.tasksArray.length - 1].time;
  }
}

const toDoApp = new ToDoApp();

toDoApp.addDate();
