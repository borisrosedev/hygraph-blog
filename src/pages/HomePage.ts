import HeaderComponent from "../layout/HeaderComponent";

export default function () {
    return (
        `
            ${HeaderComponent()}
            <main class="main home__main">
                <h1> Page d'accueil </h1>
            </main>
        
        `
    )
}