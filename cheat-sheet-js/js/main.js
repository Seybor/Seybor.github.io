import { s, all } from "./modules/base.js"
import getCounter from "./modules/titleCounter.js"
import renderEl from "./modules/render.js"
import startEvents from "./modules/events.js"

// $('body').hide()


getCounter()
renderEl()
startEvents()

