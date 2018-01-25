var planner = (function () {
    var planner = document.getElementById("planner"),
        plannerBlock = document.createElement('div'),
        plannerTitle = document.createElement('span'),
        plannerTaskList = document.createElement("ol"),
        plannerTaskItem = document.createElement("li"),
        newTaskButton = document.createElement("button");


    var watchBlock = document.createElement('div'),
        currentTask = document.createElement('span'),
        watchDisplay = document.createElement('div');


    var addTaskForm = document.createElement("form"),
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

    hoursLabel.innerText = "hh";
    minutesLabel.innerText = "mm";
    addTaskForm.name = "createTask";
    selectHours.name = "selectHours";
    selectMinutes.name = "selectMinutes";

    addTaskButton.innerText = "Создать";
    cancelButton.innerText = "Отмена";



    plannerBlock.classList.add("planner-block");
    watchBlock.classList.add("watch-block");
    currentTask.classList.add("current-task");
    watchDisplay.classList.add("watch-display");

    plannerTitle.classList.add("planner-title");
    plannerTitle.innerHTML = "Список задач:"
    plannerTaskList.classList.add("planner-task-list");
    plannerTaskItem.classList.add("planner-task-item");
    newTaskButton.classList.add("new-task-button");
    newTaskButton.innerText = "Новая задача";


    planner.appendChild(plannerBlock);
    planner.appendChild(watchBlock);
    watchBlock.appendChild(currentTask);
    watchBlock.appendChild(watchDisplay);

    plannerBlock.appendChild(plannerTitle);
    plannerBlock.appendChild(plannerTaskList);
    plannerBlock.appendChild(newTaskButton);

    plannerBlock.appendChild(addTaskForm);
    addTaskForm.appendChild(addTaskInput);
    addTaskForm.appendChild(taskTimeStart);
    taskTimeStart.appendChild(hoursLabel);
    taskTimeStart.appendChild(hoursLabel);
    taskTimeStart.appendChild(selectHours);
    taskTimeStart.appendChild(minutesLabel);
    taskTimeStart.appendChild(selectMinutes);


    taskTimeEnd = taskTimeStart.cloneNode(true);
    taskTimeEnd.className = "task-time task-time-end";
    addTaskForm.appendChild(taskTimeEnd);
    addTaskForm.appendChild(addTaskButton);
    addTaskForm.appendChild(cancelButton);

    document.createTask.selectHours.forEach(sel => {
        for (var i = 0; i < 24; i++) {
            sel.options[i] = i < 10 ? new Option("0" + i, i, false, false) :
                new Option(i, i, false, false);
        }
    });

    document.createTask.selectMinutes.forEach(sel => {
        for (var i = 0; i < 60; i++) {
            sel.options[i] = i < 10 ? new Option("0" + i, i, false, false) :
                new Option(i, i, false, false);
        }
    });

    newTaskButton.addEventListener("click", function () {
        plannerBlock.removeChild(newTaskButton);
    });

    addTaskButton.addEventListener("click", function (e) {
        plannerTaskItem = plannerTaskItem.cloneNode(true);
        plannerTaskItem.innerHTML = addTaskInput.value;
        plannerTaskList.appendChild(plannerTaskItem);
        addTaskInput.value = "";
        e.preventDefault();
    });

    cancelButton.addEventListener("click", function (e) {
        plannerBlock.removeChild(addTaskForm);
        plannerBlock.appendChild(newTaskButton);
    })




    setInterval(function () {
        var time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        watchDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;

    }, 1000);

}());
