export default function (data: { isBig: boolean, textContent: string } = { isBig: false, textContent: "" }): string {

    if (data.isBig) {
        return (
            `
                <button class="button button--big">${data.textContent}</button>
            
            `
        )
    } else {
        return (
            `
                <button class="button button--small">${data.textContent}</button>
            
            `
        )

    }


}