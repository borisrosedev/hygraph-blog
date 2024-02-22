import './style.css'
import router from "./router"

const init = async () => {
  router();
}

window.addEventListener('DOMContentLoaded', init)