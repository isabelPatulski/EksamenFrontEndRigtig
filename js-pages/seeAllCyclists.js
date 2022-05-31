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

// export function searchCyclistHandler(){
//     //document.getElementById("btn-search-hobby").onclick = function () {searchHobby()
//     //}
//       document.getElementById("hobby-search").oninput = function () {searchCyclist()}
//   }
    
export function searchCyclist(){
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("cyclist-search");
    filter = input.value.toUpperCase();
    table = document.getElementById("cyclist-table");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            //Her sker sammenligningen
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
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