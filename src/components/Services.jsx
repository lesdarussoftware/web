import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import { LanguageSharp, PhoneIphoneSharp, DesktopMacSharp, VideogameAssetSharp, EngineeringSharp } from '@mui/icons-material'

export function Services() {

    useEffect(() => {
        ScrollReveal().reveal('.servicesContainer')
    }, [])

    return (
        <article className="servicesContainer">
            <h2>
                Nuestros servicios
            </h2>
            <div className="serviceCardContainer">
                <div className="serviceCard">
                    <LanguageSharp className="serviceIcon" />
                    <h3>
                        Sistemas Web
                    </h3>
                    <p>
                        Creamos sistemas web personalizados y funcionales que representan la esencia de tu
                        marca y proporcionan una experiencia excepcional al usuario.
                    </p>
                </div>
                <div className="serviceCard">
                    <PhoneIphoneSharp className="serviceIcon" />
                    <h3>
                        Aplicaciones Móviles
                    </h3>
                    <p>
                        Diseñamos y desarrollamos aplicaciones móviles de primera clase
                        que destacan en las tiendas de aplicaciones y brindan soluciones prácticas para tus
                        clientes y empleados.
                    </p>
                </div>
                <div className="serviceCard">
                    <DesktopMacSharp className="serviceIcon" />
                    <h3>
                        Sistemas Locales
                    </h3>
                    <p>
                        Ofrecemos soluciones de software locales robustas y escalables
                        que optimizan tus procesos empresariales y mejoran la eficiencia operativa.
                    </p>
                </div>
                <div className="serviceCard">
                    <VideogameAssetSharp className="serviceIcon" />
                    <h3>
                        Videojuegos
                    </h3>
                    <p>
                        Sumérgete en el emocionante mundo de los videojuegos con nuestras creaciones
                        innovadoras y envolventes que cautivan a los jugadores de todas las edades.
                    </p>
                </div>
                <div className="serviceCard">
                    <EngineeringSharp className="serviceIcon" />
                    <h3>
                        Herramientas Varias de Software
                    </h3>
                    <p>
                        Desde herramientas de productividad hasta software
                        de gestión empresarial, desarrollamos soluciones a medida que impulsan el rendimiento
                        y la productividad de tu empresa.
                    </p>
                </div>
            </div>
        </article>
    )
}