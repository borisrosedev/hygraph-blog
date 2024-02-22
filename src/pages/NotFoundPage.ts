import HeaderComponent from "../layout/HeaderComponent";

export default function () {
    return (
        `
            ${HeaderComponent()}
            <main class="main not-found__main">
                <section class="not-found__message-section">
                    <h1> 404 </h1>
                    <p>La page que vous cherchez n'existe pas <p>
                    <a href="/">Retour à la page d'accueil</a>
                </section>
            </main>
        
        `
    )
}