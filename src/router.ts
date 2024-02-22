import { HomeContainer } from "./containers/HomeContainer";
import { LoginContainer } from "./containers/LoginContainer";
import { RouterType } from "./interfaces/Router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

declare global {
    interface Window {
        onNavigate: RouterType
    }
}


function router(pathname: string, hash: string): void {
    window.history.pushState(null,"",pathname+hash)
    console.log(pathname)
    const isRoot: boolean = pathname.endsWith('/') || pathname.endsWith('/index.html')
    const container: HTMLElement | null = document.getElementById('app');
    container!.innerHTML == ""
    if (isRoot && !hash) {
        console.log('🌲 Racine ')
        container!.innerHTML = HomePage()
        new HomeContainer(window.onNavigate)
    }
    else if (isRoot && hash == '#articles') {
        console.log('🛍️ Articles')
    }
    else if (isRoot && hash == '#login') {
        console.log('👩🏿‍🦰 Login')
        container!.innerHTML = LoginPage()
        new LoginContainer(window.onNavigate)
    }
    else {
        container!.innerHTML = NotFoundPage()
    }
}

window.onNavigate = (p: string, h: string) => {
    router(p, h);
}

window.onpopstate = () => {
    const location: Location = window.location
    router(location.pathname, location.hash)
}


export default function () {
    const location: Location = window.location
    router(location.pathname, location.hash);
}