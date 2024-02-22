import ButtonComponent from "../components/ButtonComponent";
import CubeBox from "../extra/CubeBox";
import HeaderComponent from "../layout/HeaderComponent";

export default function () {
    return (
        `
            ${HeaderComponent()}
            <main class="main home__main">
                <h1> Page d'accueil </h1>
                <section class="home__cube-section">
                    ${CubeBox()}
                </section>
                <section class="home__actions">
                
                    ${ButtonComponent({ isBig: true, textContent: 'Découvrir nos articles'})}
                    ${ButtonComponent({ isBig: true, textContent: 'Inscrivez-vous'})}
                
                </section>

            </main>
        
        `
    )
}