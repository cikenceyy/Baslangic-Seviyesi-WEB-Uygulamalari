// DOM
var formDom = document.querySelector("#bmıForm")
formDom.addEventListener("submit", bmıCalc)


function bmıCalc(event) {

    event.preventDefault()

    let heightDOMValues = document.querySelector("#cm").value
    let weightDOMValues = document.querySelector("#kg").value

    let result = weightDOMValues / (heightDOMValues ** 2 / 10000)

    result = result.toFixed(2)


    let resultDom = document.querySelector(".result-bmi").innerHTML = result

}