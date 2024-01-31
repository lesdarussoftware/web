import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

export function Presentation() {

    useEffect(() => {
        ScrollReveal().reveal('.presentationContainer')
    }, [])

    return (
        <article className="presentationContainer">
            <h1>
                Bienvenido/a a Lesdarus Software
            </h1>
            <p>
                En Lesdarus, nos apasiona convertir tus ideas en realidad digital.
                Con un equipo de expertos en desarrollo de software,
                nos especializamos en crear soluciones innovadoras y a
                medida que impulsan el crecimiento y el éxito de tu negocio.
            </p>
            <p>
                ¿Estás buscando llevar tu presencia en línea al siguiente nivel?
                Desde sitios web dinámicos y aplicaciones móviles intuitivas hasta sistemas locales eficientes y
                emocionantes videojuegos, estamos aquí para hacerlo posible.
            </p>
            <p>
                En Lesdarus, nos enorgullece ofrecer servicios de desarrollo de software de alta calidad que
                se adaptan a tus necesidades específicas y superan tus expectativas.
                Nuestro enfoque centrado en el cliente y nuestra pasión por la excelencia nos distinguen en el mercado.
            </p>
            <p>
                ¡Déjanos ser tu socio de confianza en el viaje hacia el éxito digital!
                Contáctanos hoy mismo para comenzar a convertir tus visiones en realidad.
            </p>
        </article>
    )
}