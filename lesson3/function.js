function summary() {
    var a = +prompt("Ведите первое число"),
        b = +prompt("Ведите второе число"),
        c = +prompt("Ведите третье число");
    return (a + b + c) / 3;
}

function checkNumber(abc) {
    return isNaN(abc) ? alert("Некорректное значение. Введите числа.") : alert("Среднее арифметическое всех чисел: " + abc);
}

var abc = summary();
checkNumber(abc);


function summaryLine() {
    var numbers = prompt("Введите числа через запятую"),
        re = /\s*,\s*/,
        arrNumbers = numbers.split(re),
        sum = 0;
    for (var i = 0; i < arrNumbers.length; i++) {
        sum += Number(arrNumbers[i]);
    }
    return sum / arrNumbers.length;
}

var result = summaryLine();
checkNumber(result);



function isPalindrome() {
    var string = prompt("Enter a string or number."),
        stringCheck = string.toLowerCase().replace(/\s+/g, ''),
        stringReverse = stringCheck.split("").reverse().join("");
    return stringCheck == stringReverse ? alert(string + " IS a palindrome.") : alert(string + " IS NOT a palindrome.");
}

isPalindrome();


function askName() {
    return prompt("Введите ваше имя и фамилию");
}

function askAge() {
    return prompt("Введите ваш возраст");
}

function askEducation() {
    prompt("Ваше образование (название учебного заведения и специальность).");
}

function askMarry() {
    return confirm("Вы женаты/замужем?");
}

function askRelocation() {
    return confirm("Вы готовы к переезду?");
}

function askTrips() {
    return confirm("Вы готовы к частым командировкам?");
}

function yesNo(option) {
    return option ? option = "Да" : option = "Нет";
}

function printAnswers(name, age, education, marry, relocation, trips) {
    document.getElementById("li1").innerHTML = "Имя: " + name;
    document.getElementById("li2").innerHTML = "Возраст: " + age;
    document.getElementById("li3").innerHTML = "Образование: " + education;
    document.getElementById("li4").innerHTML = "Женат/замужет: " + marry;
    document.getElementById("li5").innerHTML = "Готовность к переезду: " + relocation;
    document.getElementById("li6").innerHTML = "Готовность к командировкам: " + trips;
}

var name = askName(),
    age = askAge(),
    education = askEducation(),
    marry = askMarry(),
    relocation = askRelocation(),
    trips = askTrips();

marry = yesNo(marry);
relocation = yesNo(relocation);
trips = yesNo(trips);
printAnswers(name, age, education, marry, relocation, trips);

var arr = [12, 1, 23, 46, 5];
for (var i = 0; i < arr.length; arr[i]++, i++) ;