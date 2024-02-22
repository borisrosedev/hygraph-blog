import './style.css'
import { BlogService } from "./services/blog-service"
import router from "./router"




const init = async() => {
  router();
}

window.addEventListener('DOMContentLoaded', init)