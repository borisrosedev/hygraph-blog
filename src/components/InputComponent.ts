import { InputInterface } from "../interfaces/Input";

export default function (input: InputInterface) {

    return (
        `
            <article class="input__article">

                <label for="${input.name}"></label>
                <input 
                    type="${input.type}"
                    placeholder="${input.placeholder}"
                    id="${input.name}"
                >

            </article>

        
        `
    )
}