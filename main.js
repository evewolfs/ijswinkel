var inputList = document.querySelector('form').querySelectorAll('input[type="number"]');
console.log(inputList);
var counterBollen = 0;
var div = document.createElement("div");
var form = document.querySelector("form");
var naamLabel = document.querySelector("#naamLabel");
var naamInput = document.querySelector("#naamInput");
var alertOk = document.createTextNode("uw ijsje is besteld");
var alertNotOk = document.createTextNode("Ongeldig aantal bollen. Minimum 1, maximaal 3")
var alertNotOkNaam = document.createTextNode("Het naamveld moet nog ingevuld worden!")

function verstuur() {
    for (let i = 0 ; i<inputList.length ; i++){
        counterBollen += inputList[i].valueAsNumber;
    }
    if(counterBollen> 3 || counterBollen < 1){
        div.appendChild(alertNotOk);
        div.classList.add("alert","alert-danger", "alerttext");
        form.insertBefore(div, naamLabel);
        counterBollen = 0;

        } else if(naamInput.value == ""){
            div.appendChild(alertNotOkNaam);
            div.classList.add("alert","alert-danger", "alerttext");
            form.insertBefore(div, naamLabel);
            counterBollen = 0;

            } else {
                div.appendChild(alertOk);
                div.classList.add("alert", "alert-success", "alerttext");
                form.insertBefore(div, naamLabel);
            }
}