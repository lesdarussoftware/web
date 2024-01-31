import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

export function Services() {

    useEffect(() => {
        ScrollReveal().reveal('.servicesContainer')
    }, [])

    return (
        <article className="servicesContainer">
            <h2>
                Nuestros servicios incluyen:
            </h2>
            <p>
                Desarrollo de Sistemas Web:
                Creamos sitios web personalizados y funcionales que representan la esencia de tu
                marca y proporcionan una experiencia excepcional al usuario.
            </p>
            <p>
                Aplicaciones Móviles: Diseñamos y desarrollamos aplicaciones móviles de primera clase
                que destacan en las tiendas de aplicaciones y brindan soluciones prácticas para tus
                clientes y empleados.
            </p>
            <p>
                Sistemas Locales: Ofrecemos soluciones de software locales robustas y escalables
                que optimizan tus procesos empresariales y mejoran la eficiencia operativa.
            </p>
            <p>
                Videojuegos: Sumérgete en el emocionante mundo de los videojuegos con nuestras creaciones
                innovadoras y envolventes que cautivan a los jugadores de todas las edades.
            </p>
            <p>
                Herramientas Varias de Software: Desde herramientas de productividad hasta software
                de gestión empresarial, desarrollamos soluciones a medida que impulsan el rendimiento
                y la productividad de tu empresa.
            </p>
        </article>
    )
}