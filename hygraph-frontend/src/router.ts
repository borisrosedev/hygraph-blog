

type RouterType = (p: string, h: string) => void

declare global {
    interface Window {
        onNavigate: RouterType
    }
}


function router(pathname: string, hash: string): void {

    window.history.pushState(null,"",hash)
    console.log(pathname)
    const isRoot: boolean = pathname.endsWith('/') || pathname.endsWith('/index.html')
    const container: HTMLElement | null = document.getElementById('app');


    if (isRoot && !hash) {
        console.log('🌲 Racine ')
    }

    if (isRoot && hash == '#products') {
        console.log('🛍️ Products')
    }

    if (isRoot && hash == '#login') {
        console.log('👩🏿‍🦰 Login')
    }

    if (isRoot && hash == '#login') {
        console.log('👩🏿‍🦰 Login')
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