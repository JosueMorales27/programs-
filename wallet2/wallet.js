const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(parseFloat(answer));
        });
    });
}

async function main() {
    console.log("Welcome to the budget calculator!");

    const totalIncome = await getInput("Please enter your total income: ");
    const debtPayment = await getInput("Please enter your debt payment amount: ");

    const availableBudget = totalIncome - debtPayment;

    const transportationExpense = await getInput("Please enter your transportation expense: ");
    const foodExpense = await getInput("Please enter your food expense: ");
    const pianoClassesExpense = await getInput("Please enter your piano classes expense: ");
    const phoneExpense = await getInput("Please enter your phone expense: ");

    const totalExpenses = transportationExpense + foodExpense + pianoClassesExpense + phoneExpense;

    if (totalExpenses > availableBudget) {
        console.log("Your expenses exceed your available budget. Please adjust your expenses.");
    } else {
        const remainingBudget = availableBudget - totalExpenses;
        console.log(`Your available budget for the month is: $${remainingBudget.toFixed(2)}.`);

        const weeklyBudget = (remainingBudget / 4).toFixed(2);
        console.log(`Your weekly budget is: $${weeklyBudget}`);

        const dailyBudget = (remainingBudget / 28).toFixed(2);
        console.log(`Your daily budget is: $${dailyBudget}`);
    }

    rl.close();
}

main();