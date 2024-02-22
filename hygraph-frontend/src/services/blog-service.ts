import { request } from 'graphql-request';

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

}