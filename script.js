let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let expensesQuest = prompt("Введите обязательную статью расходов в этом месяце:");
let expensesMoney = prompt("Во сколько это обойдется?");


let expenses = {
    expensesQuest : expensesMoney
};


let appData = {
    moneyData : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};

let everyday = money / 30;

alert(everyday);