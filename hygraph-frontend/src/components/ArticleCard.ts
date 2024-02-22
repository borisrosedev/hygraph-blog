import { ArticleInterface } from "../interfaces/Article";



export default function (isFull: boolean, data: ArticleInterface): string {

    if (isFull) {
        return (

            `
                <article class="blog-article blog-article--full">

                    <figure>

                        <img src="${data.url}" alt="${data.alt}" />
                    
                        <figcaption>
                            ${data.alt ? data.alt : data.title}
                        </figcaption>
                    </figure>


                    <section>
                    
                        <p>${data.content}</p>
                    
                    </section>



                </article>
            
            `
        )
    } else {
        return (
            `
                <article class="blog-article blog-article--short">
                <figure>
                    <img src="${data.url}" alt="${data.alt}" />
                    <figcaption>
                        ${data.alt ? data.alt : data.title}
                    </figcaption>
                </figure>
                <section>

                    <p> ${data.description}</p>

                </section>

                </article>
            `
        )
    }

}