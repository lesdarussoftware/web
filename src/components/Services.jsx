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
                        que brindan soluciones prácticas para tus
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
                    <EngineeringSharp className="serviceIcon" />
                    <h3>
                        Herramientas de Innovación
                    </h3>
                    <p>
                        Desde aplicaciones descentralizadas hasta integraciones de IA, 
                        desarrollamos soluciones a medida que ofrecen experiencias innovadoras.
                    </p>
                </div>
            </div>
        </article>
    )
}