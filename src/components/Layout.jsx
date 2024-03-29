import { Contact } from './Contact'

import Logo from '../assets/logo.png'

export function Layout({ children }) {
    return (
        <>
            <header>
                <img src={Logo} alt="Logo de Lesdarus Software" width={200} />
                <Contact />
            </header>
            <main>
                {children}
            </main>
            <footer>
                Lesdarus &copy; {new Date().getFullYear()}
            </footer>
        </>
    )
}