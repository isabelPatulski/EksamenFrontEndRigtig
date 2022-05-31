import{renderTemplate, setActive, showPage} from "./utils.js"
import{cyclistHandlers,  deleteHandler} from "./js-pages/seeAllCyclists.js"
import{addHandlers} from "./js-pages/addCyclist.js"


function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  
    switch (id) {
      
      //Henter javascript metoder 
      case "page-home": {
        break
      }
      case "page-cyclist": {
        cyclistHandlers()
        deleteHandler()
       break
      }
      case "page-add-cyclist": {
        addHandlers()
        break
      }
    }
  }

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-home") 