import {makeOptions} from "../fetchUtils.js"
import {URL} from "../settings.js"
const cyclistURL =  URL + "/cyclists"


export function addCyclistElement(){
    document.getElementById("btn-add-cyclist").onclick = addCyclist
}

function addCyclist(){
const cyclist = {}
cyclist.name = document.getElementById("input-name").value
cyclist.team = document.getElementById("input-team").value


fetch(candidateURL, makeOptions("POST", cyclist))
    .then(res => res.json())
    .then(newCyclist => {
        document.getElementById("cyclist-info-all").innerText = JSON.stringify(newCyclist)
    })
    .catch(error => console.error(error))
}