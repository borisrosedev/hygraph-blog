import { RouterType } from "../interfaces/Router";
import generator from "../utils/console-generator"

export class HomeContainer {
    onNavigate: RouterType;
    consoleGenerator: any

    constructor(onNavigate: RouterType) {
        this.consoleGenerator = generator([
            'HomeContainer Constructor : called ✅', 
            'onDiscoverArtilces : called ✅'
        ])
        console.log('Home Container Constructor has been called');
        this.onNavigate = onNavigate
        this.consoleGenerator.next().value
    }

    onDiscoverArticles() {
        this.consoleGenerator.next().value
        this.onNavigate("/", "#articles")
    }


}