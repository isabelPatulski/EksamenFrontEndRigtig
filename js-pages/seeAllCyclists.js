import { handleHttpErrors, makeOptions } from "../fetchUtils.js";
import { URL } from "../settings.js";

const cyclistURL = URL + "/cyclists"

export function cyclistHandlers(){
    showCyclists();
}

async function showCyclists(){
    try{
        const cyclist = await fetch(cyclistURL).then(res => handleHttpErrors (res))
        console.log(cyclist)
        const tableData = cyclist.map(cyclist => `
        <tr> 
            <td>${cyclist.id}</td>    
            <td>${cyclist.name}</td>
            <td>${cyclist.teamName}</td>
        </tr>
        `).join("\n")
        document.getElementById("tbl-body").innerHTML = tableData
    }
    catch(err){
      console.log(err.message)
    } 
}

export function deleteHandler(match){
    deleteCyclist()
    console.log("deleteHandler")
    document.getElementById("delete-btn").addEventListener("click", deleteCyclist)
}


async function deleteCyclist(){
    const cyclistId = document.getElementById("cyclist-deleteId").value
    console.log("cyclist Id= ", cyclistId)
    try{
        await fetch(cyclistURL+"/"+cyclistId, makeOptions("DELETE")).then(res => handleHttpErrors (res))    
    }
    catch(error){ 
            console.log(error.message)
    }
    showCyclists();
}