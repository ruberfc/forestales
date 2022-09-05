export default function Footer(props) {
    return (
        <>
            <div className="container-fluid bg-azul text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-md-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Información</h3>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-geo-alt text-verde me-2"></i>
                                        <p className="mb-0"><a href="https://goo.gl/maps/41Z8tx9eoJanJjRK8" target="_blank"
                                            className="badge bg-verde text-white text-decoration-none"> Av. Mariscal Castilla N° 3909 Pabellon
                                            A</a></p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-envelope-open text-verde me-2"></i>
                                        <p className="mb-0">forestales@uncp.edu.pe</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-telephone text-verde me-2"></i>
                                        <p className="mb-0">481060 anexo 7016</p>
                                    </div>

                                    <div className="d-flex mt-4">
                                        <a className="btn btn-sm bg-white mx-1" target="_blank" title="Whatsapp"
                                            href="https://web.whatsapp.com/"><i
                                            className="bi bi-whatsapp text-azul"></i></a>
                                        <a className="btn btn-sm bg-white" target="_blank" title="Facebook"
                                            href="https://www.facebook.com/Facultad-de-Ciencias-Forestales-y-del-Ambiente-UNCP-135570359810730/?_rdc=1&_rdr"><i
                                            className="bi bi-facebook text-azul"></i></a>
                                        <a className="btn btn-sm bg-white mx-1" target="_blank" title="Youtube"
                                            href="https://www.youtube.com/channel/UCayEc8TPglHCHgxLRJXWYpg"><i
                                            className="bi bi-youtube text-azul"></i></a>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Vinculos</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <a className="text-light text-decoration-none mb-2" href="./index.html"><i
                                            className="bi bi-arrow-right text-verde me-2"></i>Inicio</a>
                                        <a className="text-light text-decoration-none mb-2" href="./plana-docente.html"><i
                                            className="bi bi-arrow-right text-verde me-2"></i>Plana Docente</a>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Lema</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <p><span className="text-verde fs-6">" </span> 
                                            <span className="text-justify">Los forestales tenemosque reforzar nuestro
                                            sentido de responsabilidad social. El recurso bosque existe para que sirva al
                                            pueblo, al pueblo de hoy, así como atodas las generaciones futuras </span>
                                            <span className="text-verde fs-6">" </span>&nbsp; Jack WESTOBY.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white bg-dark">
                <div className="container text-center">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{height: "75px"}}>
                                <p className="mb-0 fs-6">&copy; <a className="text-white"
                                    href="./index.html">forestales.uncp.edu.pe</a> - Todos los derechos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="btn bg-verde rounded back-to-top"><i
            className="bi bi-arrow-up text-white"></i></a>
        </>
    )
}