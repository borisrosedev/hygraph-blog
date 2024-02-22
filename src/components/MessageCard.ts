import { MessageInterface } from "../interfaces/Message"

export default function (data:MessageInterface) {

    if (data.author) {
        return (
            `
                <section>
                    <header>
                        <h3>${data.title}</h3>
                    </header>
                    <section>
                        ${data.content}
                    </section>
                    <footer>
                        ${data.author}
                    </footer>   
                </section>
            
            `
        )


    } else {

        return (
            `
                <section>
                    <header>
                        <h3>${data.title}</h3>
                    </header>
                    <section>
                        ${data.content}
                    </section>           
                </section>
            
            `
        )
    }

}