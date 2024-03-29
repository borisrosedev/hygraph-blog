import FormComponent from "../components/FormComponent";
import { RouterType } from "../interfaces/Router";
import generator from "../utils/console-generator";

export class LoginContainer {
    onNavigate: RouterType;
    consoleGenerator: any

    constructor(onNavigate:RouterType) {
        this.consoleGenerator = generator([
            "Login Container Constructor : called ✅",
            "logOptionHandler : called ✅",
            "formHandler : called ✅"
        ]);

        this.onNavigate = onNavigate
        this.consoleGenerator.next().value
       


    }

    logOptionHandler(e: Event) {
        const target: any = e.target
        if (target.dataset.isLoggingIn == "true") {
            console.log('Etait en train de se connecter');
            this.formHandler(false)
        } else {
            console.log('Etait en train de d\'inscrire');
            this.formHandler(true)
        }
    }

    formHandler(isLoggingIn: boolean) {

        const loginFormSection = document.getElementById('login__form-section');
        console.log(loginFormSection);

        const inputs = [
            {
                name: 'email',
                type: 'email',
                placeholder: 'Entrez votre email'
            },
            {
                name: 'password',
                type: 'password',
                placeholder: 'Entrez votre mot de passe',

            }
        ]
        loginFormSection!.innerHTML = ""

        if (isLoggingIn) {
            console.log('🟠 Formulaire de connexion présent sur le DOM')
            loginFormSection!.innerHTML = FormComponent(inputs)
        }

        if (!isLoggingIn) {
            console.log('🔵 Formulaire d\'inscription présent sur le DOM')
            inputs.push({
                name: 'confirmed-password',
                type: 'password',
                placeholder: 'Confirmez le mot de passe',
            })
            loginFormSection!.innerHTML = FormComponent(inputs)
        }


    }




}