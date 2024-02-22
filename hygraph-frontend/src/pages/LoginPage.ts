import FormComponent from "../components/FormComponent";
import HeaderComponent from "../layout/HeaderComponent";

export default function () {
    return (
        `
            ${HeaderComponent()}
            <main class="main login__main">

                <h1> Page de Connexion/Inscription </h1>
                <section id="login__form-section">
              
                </section>
            </main>
        
        `
    )
}