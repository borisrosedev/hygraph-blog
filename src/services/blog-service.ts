import { request } from 'graphql-request';
import { ArticleInterface } from '../interfaces/Article';

const endpoint = import.meta.env.VITE_QUERY_AND_MUTATE_API;

export class BlogService {

  public async  fetchArticles(){
      const query = `
        query {
          articles {
            title
          }
        }
      `
      request(endpoint, query)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
  }

  public async storeArticle(data:ArticleInterface){
    const query = `
      mutation {
        createArticle(data:${data}){
          id,
          title, 
          description,
          url,
          alt

        }
      }
    
    `
    request(endpoint, query)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
  }

}