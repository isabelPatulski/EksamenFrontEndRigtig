import {makeOptions, handleHttpErrors} from "../fetchUtils.js"
import {URL} from "../settings.js"
const cyclistURL =  URL + "/cyclists"


// export function addCyclistElement(){
//     document.getElementById("btn-add-cyclist").onclick = addCyclist
// }

// function addCyclist(){
// const cyclist = {}
// cyclist.name = document.getElementById("input-name").value
// cyclist.team = document.getElementById("input-team").value


// fetch(candidateURL, makeOptions("POST", cyclist))
//     .then(res => res.json())
//     .then(newCyclist => {
//         document.getElementById("cyclist-info-all").innerText = JSON.stringify(newCyclist)
//     })
//     .catch(error => console.error(error))
// }

 export function addHandelers(match){
    addCyclist()
     console.log("AddHandelers")
     document.getElementById("btn-add-cyclist").addEventListener("click", addCyclist)
    }


function addTeam(team){
    const id = team.params.id;
    const teamName = team.params.teamName;
    console.log("AddTeam")
    
    document.getElementById("id").innerHTML = id
    document.getElementById("teamName").innerHTML = teamName

}


async function addCyclist(){
    const id = document.getElementById("cyclist-id").innerHTML
    console.log("Id = "+id)

    const newCyclist = {}

    newCyclist.name = document.getElementById("input-name").value
    newCyclist.id = document.getElementById("input-id").value
    console.log("New cyclist: ",newCyclist)
    try{
        console.log("Fetch: ",cyclistURL+"/"+newCyclist.id)
        await fetch(cyclistURL+"/"+newCyclist.id, makeOptions("POST", newCyclist)).then(res => handleHttpErrors (res))
        }catch (error) { 
            console.log("Error: ",error.message)
    }
}