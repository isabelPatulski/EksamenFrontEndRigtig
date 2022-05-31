import{renderTemplate, setActive, showPage} from "./utils.js"
import{cyclistHandlers,  deleteHandler} from "./js-pages/seeAllCyclists.js"
import{addHandlers} from "./js-pages/addCyclist.js"


function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
      //Here you can execute JavaScript for the selected page
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
showPage("page-home") //Set the default page to render