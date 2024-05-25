#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let user = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "What is your name ? "
});
console.log(chalk.bold.yellow(`\nWelcome ${user.name}\n`));
const quiz = await inquirer.prompt([{
        name: "question1",
        type: "list",
        message: "What is the correct way to check if two values are not equal in Typescript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    { name: "question2",
        type: "list",
        message: "Which of the following characters is commonly allowed in variable names in Typescript?",
        choices: ["$", "@", "#", "&"] },
    { name: "question3",
        type: "list",
        message: "Which opertor is commonly used for string concatination in Typescript?",
        choices: ["+", "-", "*", "/"] },
    { name: "question4",
        type: "list",
        message: "In Typescript, which symbolis commonly used to terminate a statement?",
        choices: [".", ":", ";", ","] },
    { name: "question5",
        type: "list",
        message: "Which method of Inquirer is used to start the prompt interface and receive user input",
        choices: ["start()", "init()", "prompt()", "run()"] },
]);
let score = 0;
switch (quiz.question1) {
    case "a !== b":
        ++score;
        console.log(chalk.bold.green("1.Correct Answere!"));
        break;
    default:
        console.log(chalk.bold.red("1.Incorrect Answere!"));
        break;
}
switch (quiz.question2) {
    case "$":
        ++score;
        console.log(chalk.bold.green("2.Correct Answere!"));
        break;
    default:
        console.log(chalk.bold.red("2.Incorrect Answere!"));
        break;
}
switch (quiz.question3) {
    case "+":
        ++score;
        console.log(chalk.bold.green("3.Correct Answere!"));
        break;
    default:
        console.log(chalk.bold.red("3.Incorrect Answere!"));
        break;
}
switch (quiz.question4) {
    case ";":
        ++score;
        console.log(chalk.bold.green("4.Correct Answere!"));
        break;
    default:
        console.log(chalk.bold.red("4.Incorrect Answere!"));
        break;
}
switch (quiz.question5) {
    case "prompt()":
        ++score;
        console.log(chalk.bold.green("5.Correct Answere!"));
        break;
    default:
        console.log(chalk.bold.red("5.Incorrect Answere!"));
        break;
}
console.log(`\nDear ${chalk.bold.green(user.name)}, Your gained ${chalk.bold.green(score)} out of 5`);
