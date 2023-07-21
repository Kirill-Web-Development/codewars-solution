//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
//The maximum time never exceeds 359999 (99:59:59)

//You can find some examples in the test fixtures.


function humanReadable (seconds) {
    let hours = Math.floor(seconds / 60 / 60)
    let minutes = Math.floor(seconds / 60);
    const sec = seconds - (minutes* 60);
    while (minutes >= 60) {
        minutes -= 60;
    }
    function addZero(time) {
        if (time < 10) {
            return '0' + time
        }
        return time;
    }
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(sec)}`
  }
