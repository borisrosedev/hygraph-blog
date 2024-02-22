export default function (input: any) {

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