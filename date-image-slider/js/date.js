
function getCurrentTime() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();

    // map time to standard instead of military
    const map = {
        "13": '1', 
        "14": '2', 
        "15": '3', 
        "16": '4', 
        "17": '5', 
        "18": '6', 
        "19": '7', 
        "20": '8', 
        "21": '9', 
        "22": '10', 
        "23": '11', 
        "00": '12'
    }

    // set hour
    let newHours = map[hour] && map[hour].length === 1 ? `0${map[hour]}` : `${ String(hour).length === 1 ? `0${hour}` : hour}`;

    // set current time
    return `${newHours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function getCurrentDate() {
    const date = new Date();

    // get all date properties
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${month}/${day}/${year}`;
}

export { 
    getCurrentTime,
    getCurrentDate
}