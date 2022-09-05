import Mision from '../../../assets/img/mision.jpg'
import Vision from '../../../assets/img/vision.jpg'
import Politica from '../../../assets/img/politicas.jpg'

export default function MisionVision(props) {
    return (
        <>
            <div className="container-fluid py-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-0">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "1024px"}}>
                        <h3 className="mb-0 fw-bold">En la facultad tenemos el compromiso con el medio ambiente y la sociedad de
                            hacer sinergia para el beneficio de las partes.</h3>
                    </div>

                    <div className="row g-12 mb-12 pb-3 mb-5 mx-auto">

                        <div className="col-lg-12 wow zoomIn bg-light pt-3" data-wow-delay="0.1s">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <img className="img-fluid border border-light rounded-3 box-shadow-clasic mb-3"
                                            src={Mision} />
                                    </div>

                                    <div className="col">
                                        <h3 className="mb-2 fw-bold text-verde text-center">MISIÓN</h3>
                                        Formar ingenieros en ciencias forestales y del ambiente, innovadores con identidad y práctica de valores, comprometidos con el desarrollo forestal sostenible. 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 wow zoomIn pt-3" data-wow-delay="0.3s">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h3 className="mb-2 fw-bold text-verde text-center">VISIÓN</h3>
                                        Facultad innovadora y humanista, generadora de ciencia y tecnología, líder en el desarrollo forestal sostenible.
                                    </div>
                                    <div className="col-4">
                                        <img className="img-fluid border border-light rounded-3 box-shadow-clasic mb-3"
                                            src={Vision} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 wow zoomIn bg-light pt-3" data-wow-delay="0.5s">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <img className="img-fluid border border-light rounded-3 box-shadow-clasic mb-3"
                                            src={Politica} />
                                    </div>

                                    <div className="col">
                                        <h3 className="mb-2 fw-bold text-verde text-center">POLÍTICA</h3>
                                        La Facultad de Ciencias Forestales y del Ambiente de la Universidad Nacional del Centro del Perú forma profesionales en el campo forestal y ambiental, con orientación tecno-científica, humanística, ética, valores, responsabilidad social y comprometidos con el desarrollo sostenible. 
                                        Para ello, se cuenta con una plana docente especializada y procesos estructurados con los estándares de calidad establecidos para la carrera profesional, orientándose a la satisfacción de los grupos de interés, al cumplimiento de los requisitos aplicables y a la mejora continua del sistema de gestión de la calidad
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 pt-3">
                            <div className="container">
                                <strong>RESOLUCIÓN N° 062-2022-CF-FCFA-UNCP</strong>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}