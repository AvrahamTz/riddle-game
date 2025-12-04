import readline from "readline-sync";
export function askRiddle(riddleObj){
    console.log(`${riddleObj.name} ${riddleObj.taskDescription}`)
    
    if ("choices" in riddleObj){
        riddleObj.choices.forEach((i, choices) => {
            console.log(choices,i)
            
            });
        const answer = readline.question("enter your answer? ")
            if (answer !== riddleObj.correctAnswer)
                askRiddle(riddleObj)
    }else{
        const answer = readline.question(`${riddleObj.name} ${riddleObj.taskDescription}
        what is the answer?
        `)
        if (answer !== riddleObj.correctAnswer)
        askRiddle(riddleObj)
    }}

export function measureSolveTime(func){

    const start =  Date.now()
    func()
    const end =  Date.now()
    return (end - start)%100
}


