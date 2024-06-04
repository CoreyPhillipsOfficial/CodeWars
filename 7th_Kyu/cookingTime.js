function cookingTime(neededPower, minutes, seconds, power) {
    let time = Math.ceil((60 * minutes + seconds) * parseInt(neededPower) / parseInt(power));
    return `${Math.floor(time / 60)} minutes, ${time % 60} seconds`;
}


// function cookingTime(neededPower, minutes, seconds, power) {

//     neededPower = parseInt(neededPower.replace('W', ''));
//     power = parseInt(power.replace('W', ''));

//     let totalTimeInSeconds = (minutes * 60) + seconds;

//     let newTimeInSeconds = Math.ceil((neededPower / power) * totalTimeInSeconds);

//     let newMinutes = Math.floor(newTimeInSeconds / 60);
//     let newSeconds = newTimeInSeconds % 60;

//     return `${newMinutes} minutes ${newSeconds} seconds`;
// }

console.log(cookingTime('600W', 4, 20, '800W'))