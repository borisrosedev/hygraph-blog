import HeaderComponent from "../layout/HeaderComponent";

export default function () {
    return (
        `
            ${HeaderComponent()}
            <main class="main not-found__main">
                <section>
                <h1> Page 404 </h1>
                </section>
            </main>
        
        `
    )
}