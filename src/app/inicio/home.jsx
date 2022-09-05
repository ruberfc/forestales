import Andinus from '../../assets/img/logo-andinus.png'
import Forestal from '../../assets/img/logo-forestales.png'
import Osinfor from '../../assets/img/logo-osinfor.png'
import Serfor from '../../assets/img/logo-serfor.jpg'
import Uncp from '../../assets/img/logo-uncp.png'

export default function Home(props) {
    return (
        <>
            <div className="container-fluid py-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-3">
                    <div className="row g-5">
                        <div className="col-lg-7" style={{minHeight: "auto"}}>
                            <div className="position-relative h-100">
                                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/g-suWpp8QTk"
                                    title="YouTube video player" frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen={true}></iframe> */}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="section-title position-relative pb-3 mb-3 mx-auto" style={{maxWidth: "1024px"}}>
                                <h5 className="fw-bold text-success text-uppercase">Video Institucional</h5>
                                <h4 className="mb-0 fw-bold">Ciencias Forestales y del Ambiente</h4>
                            </div>
                            <p className="mb-3" style={{textAlign: "justify"}}>En la UNCP el ingeniero forestal es un profesional que
                                durante su formación ha adquirido conocimientos y experiencias in situ, ya que las constantes
                                salidas a campo, visitas y experiencias de trabajo fuera del campus universitario logran que el
                                profesional construya una percepción real del sector forestal y su entorno. Lo cual al término
                                de la carrera hace que el profesional este capacitado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr />
            </div>

            <div className="container-fluid py-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-3 mb-3">
                    <div className="bg-white">
                        <div className="owl-carousel vendor-carousel text-center">
                            <img className="mx-2" src={Osinfor} alt="logo-1" style={{height: "70px"}} />
                            <img className="mx-2" src={Forestal} alt="logo-2" style={{height: "70px"}} />
                            <img className="mx-2" src={Serfor} alt="logo-3" style={{height: "70px"}} />
                            <img className="mx-2" src={Uncp} alt="logo-4" style={{height: "70px"}} />
                            <img className="mx-2" src={Andinus} alt="logo-5" style={{height: "70px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}