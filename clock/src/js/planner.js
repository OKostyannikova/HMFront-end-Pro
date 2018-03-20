let planner = document.getElementById("planner"),
    plannerBlock = document.createElement('div'),
    plannerTitle = document.createElement('span'),
    plannerTaskList = document.createElement("ol"),
    newTaskButton = document.createElement("button");


let watchBlock = document.createElement('div'),
    currentTask = document.createElement('span'),
    watchDisplay = document.createElement('div');

let addTaskForm = document.createElement("form"),
    addTaskInput = document.createElement("input"),
    taskTimeStart = document.createElement("span"),
    taskTimeEnd,
    minutesLabel = document.createElement("span"),
    hoursLabel = document.createElement("span"),
    selectHours = document.createElement("select"),
    selectMinutes = document.createElement("select"),
    addTaskButton = document.createElement("button"),
    cancelButton = document.createElement("button");

taskTimeStart.className = "task-time task-time-start";

hoursLabel.innerText = "ч";
minutesLabel.innerText = "мин";
addTaskForm.name = "createTask";
selectHours.name = "selectHours";
selectMinutes.name = "selectMinutes";
addTaskForm.style.display = "none";

addTaskButton.innerText = "Создать";
cancelButton.innerText = "Отмена";


plannerBlock.classList.add("planner-block");
watchBlock.classList.add("watch-block");
currentTask.classList.add("current-task");
watchDisplay.classList.add("watch-display");
plannerTitle.classList.add("planner-title");
plannerTitle.innerHTML = "Список задач:";
plannerTaskList.classList.add("planner-task-list");
newTaskButton.classList.add("new-task-button");
newTaskButton.innerText = "Новая задача";

planner.appendChild(watchBlock);
planner.appendChild(plannerBlock);
watchBlock.appendChild(currentTask);
watchBlock.appendChild(watchDisplay);

plannerBlock.appendChild(plannerTitle);
plannerBlock.appendChild(plannerTaskList);
plannerBlock.appendChild(addTaskForm);
plannerBlock.appendChild(newTaskButton);


addTaskForm.appendChild(addTaskInput);
addTaskForm.appendChild(taskTimeStart);
taskTimeStart.appendChild(selectHours);
taskTimeStart.appendChild(hoursLabel);
taskTimeStart.appendChild(selectMinutes);
taskTimeStart.appendChild(minutesLabel);

taskTimeEnd = taskTimeStart.cloneNode(true);
taskTimeEnd.className = "task-time task-time-end";
addTaskForm.appendChild(taskTimeEnd);
addTaskForm.appendChild(addTaskButton);
addTaskForm.appendChild(cancelButton);

(function formSelectTime() {
    document.createTask.selectHours.forEach(function (sel) {
        for (let i = 0; i < 24; i++) {
            sel.options[i] = i < 10 ? new Option("0" + i, "0" + i, false, false) :
                new Option(i, i, false, false);
        }
    });

    document.createTask.selectMinutes.forEach(function (sel) {
        for (let i = 0; i < 60; i++) {
            sel.options[i] = i < 10 ? new Option("0" + i, "0" + i, false, false) :
                new Option(i, i, false, false);
        }
    });
})();

newTaskButton.addEventListener("click", function () {
    addTaskForm.style.display = "block";
    plannerBlock.removeChild(newTaskButton);
});

addTaskButton.addEventListener("click", function (e) {
    let task = new Task(addTaskInput.value, addTaskForm[1].value, addTaskForm[2].value,
        addTaskForm[3].value, addTaskForm[4].value);
    newPlanner.addTask(task);
    e.preventDefault();
});

cancelButton.addEventListener("click", function (e) {
    addTaskForm.style.display = "none";
    plannerBlock.appendChild(newTaskButton);
    e.preventDefault();
});


function Planner() {
    this.waitingTasks = [];
    this.activeTasks = [];
}

Planner.prototype.addTask = function (task) {
    this.waitingTasks.push(task);
    this.showWaitingList();
};

Planner.prototype.showWaitingList = function () {
    plannerTaskList.innerHTML = "";
    this.waitingTasks.forEach(function (task) {
        let plannerTaskItem = document.createElement("li");
        plannerTaskItem.classList.add("planner-task-item");
        plannerTaskItem.innerHTML = task.message;
        plannerTaskList.appendChild(plannerTaskItem);
    })
};

Planner.prototype.showActiveTask = function (currentHour, currentMinutes) {
    let self = this;
    this.waitingTasks.forEach(function (task, index, arr) {
        if (task.checkTime(currentHour, currentMinutes)) {
            arr.splice(index, 1);
            self.activeTasks.push(task);
        }
    });
    this.activeTasks.forEach(function (task, index, arr) {
        if (!task.checkTime(currentHour, currentMinutes)) {
            arr.splice(index, 1);
            currentTask.innerHTML = "";
        } else {
            currentTask.innerHTML = task.message;
            newPlanner.showWaitingList();
        }
    })
};


function Task(text, startHour, startMinutes, endHour, endMinutes) {
    this.text = text;
    this.startHour = startHour;
    this.startMinutes = startMinutes;
    this.endHour = endHour;
    this.endMinutes = endMinutes;
    this.message = this.text + " " + this.startHour + ":" + this.startMinutes +
        " - " + this.endHour + ":" + this.endMinutes;
}

Task.prototype.checkTime = function (currentHour, currentMinutes) {
    if ((currentHour >= this.startHour && currentMinutes >= this.startMinutes)
        && (currentHour <= this.endHour && currentMinutes < this.endMinutes)) {
        return true;
    } else {
        return false;
    }
};

let newPlanner = new Planner();

module.exports = {
    watchDisplay,
    newPlanner
};
