import './style.css'
import { BlogService } from "./services/blog-service"

const init = async() => {
  console.log('hello');
  const blogService = new BlogService();
  blogService.fetchArticles()
}

window.addEventListener('DOMContentLoaded', init)