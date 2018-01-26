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
        selectStartTime = document.createElement("input"),
        selectEndTime = selectStartTime.cloneNode(),
        addTaskButton = document.createElement("button"),
        cancelButton = document.createElement("button");

    addTaskForm.style.display = "none";
    addTaskForm.name = "createTask";
    selectStartTime.type = "time";
    selectEndTime.type = "time";
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
    addTaskForm.appendChild(selectStartTime);
    addTaskForm.appendChild(selectEndTime);
    addTaskForm.appendChild(addTaskButton);
    addTaskForm.appendChild(cancelButton);


    newTaskButton.addEventListener("click", function () {
        addTaskForm.style.display = "block";
        newTaskButton.style.display = "none";
    });

    addTaskButton.addEventListener("click", function (e) {
        var taskTime = selectStartTime.value + " - " + selectEndTime.value;
        plannerTaskItem = plannerTaskItem.cloneNode(true);
        plannerTaskItem.innerHTML = taskTime + " " + addTaskInput.value;
        plannerTaskList.appendChild(plannerTaskItem);
        addTaskInput.value = "";
        e.preventDefault();
    });

    cancelButton.addEventListener("click", function (e) {
        addTaskForm.style.display = "none";
        newTaskButton.style.display = "block";
        e.preventDefault();
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
