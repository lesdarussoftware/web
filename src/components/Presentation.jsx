import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

export function Presentation() {
    return (
        <article className="presentationContainer">
            <Carousel>
                <Paper>
                    <div className='carouselPaper first'>
                        <div className='paperText'>
                            <h2>
                                Nos apasiona convertir tus ideas en realidad digital
                            </h2>
                            <p>
                                Con un equipo de expertos en desarrollo de software,
                                nos especializamos en crear soluciones innovadoras y a
                                medida que impulsan el crecimiento y el éxito de tu negocio.
                            </p>
                        </div>
                    </div>
                </Paper>
                <Paper>
                    <div className='carouselPaper second'>
                        <div className='paperText'>
                            <h2>
                                ¿Estás buscando llevar tu presencia en línea al siguiente nivel?
                            </h2>
                            <p>
                                Desde sitios web dinámicos y aplicaciones móviles intuitivas hasta sistemas locales eficientes y
                                emocionantes videojuegos, estamos aquí para hacerlo posible.
                            </p>
                        </div>
                    </div>
                </Paper>
                <Paper>
                    <div className='carouselPaper third'>
                        <div className='paperText'>
                            <h2>
                                Nuestro enfoque centrado en el cliente y nuestra pasión por la excelencia nos distinguen en el mercado
                            </h2>
                            <p>
                                En Lesdarus, nos enorgullece ofrecer servicios de desarrollo de software de alta calidad que
                                se adaptan a tus necesidades específicas y superan tus expectativas.
                            </p>
                        </div>
                    </div>
                </Paper>
                <Paper>
                    <div className='carouselPaper fourth'>
                        <div className='paperText'>
                            <h2>
                                ¡Déjanos ser tu socio de confianza en el viaje hacia el éxito digital!
                            </h2>
                            <p>
                                Contáctanos hoy mismo para comenzar a convertir tus visiones en realidad.
                            </p>
                        </div>
                    </div>
                </Paper>
            </Carousel>
        </article>
    )
}