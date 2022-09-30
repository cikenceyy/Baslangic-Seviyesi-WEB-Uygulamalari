function getDate() {
    // DOM
    let hoursDOM = document.querySelector(".hours")
    let minutesDOM = document.querySelector(".minutes")
    let secondsDOM = document.querySelector(".seconds")
    let dateDOM = document.querySelector(".date")

    // DATE DATA
    let nowDate = new Date()
    let hours = nowDate.getHours()
    let minutes = nowDate.getMinutes()
    let seconds = nowDate.getSeconds()
    let day = nowDate.getDate()
    let month = nowDate.getMonth()
    let year = nowDate.getFullYear()

    // DATE DATA MANİPULATİON
    hours < 10 ? hours = "0" + hours : hours
    minutes < 10 ? minutes = "0" + minutes : minutes
    seconds < 10 ? seconds = "0" + seconds : seconds
    day < 10 ? month = "0" + day : day
    month < 10 ? month = "0" + month : month

    // DATE DATA CHANGE
    hoursDOM.innerHTML = hours
    minutesDOM.innerHTML = minutes
    secondsDOM.innerHTML = seconds
    dateDOM.innerHTML = `${day} / ${month} / ${year}`

}
setInterval(getDate, 1000)