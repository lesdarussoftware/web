import { Contact } from './Contact'

import Logo from '../assets/logo.png'

export function Layout({ children }) {
    return (
        <>
            <header>
                <div className='logo-slogan'>
                    <img src={Logo} alt="Logo de Lesdarus Software" width={200} />
                    <em>Un emprendimiento para emprendedores</em>
                </div>
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