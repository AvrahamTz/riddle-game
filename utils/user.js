

export function createPlayer(name){
    const player ={
        name,
        times:[]
    }
    return player
}

export function addSolveTime(player, seconds){
    player.times.push(seconds)
}

export function showStats(player){
    var sum = 0
    for (let time =0;time< player.times.length; time ++){
        sum += player.times[time]
    }
    console.log(`${sum} ${sum/player.times.length}`)
}
