import OrganigramaPdf from '../../assets/pdf/Organigrama.pdf'

export default function Organigrama(props) {
    return (
        <>
            <div className="container-fluid py-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-0">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "1024px"}}>
                        <h3 className="mb-0 fw-bold">ESTRUCTURA ORGANIZATIVA DE LA FACULTAD DE CIENCIAS FORESTALES Y DEL AMBIENTE.</h3>
                    </div>
                    <div className="row g-12 mb-12 pb-3 mb-5 mx-aut">
                        <div className="col-lg-12 wow slideInUp" data-wow-delay="0.5s">
                            <p className="mb-0">El organigrama genera un orden en una institución, identificando y clasificando las actividades de la misma, agrupando en divisiones o departamentos, asignando autoridades para la toma de decisiones y seguimiento.</p>
                        </div>
                        <div className="col-lg-12 wow zoomIn" data-wow-delay="0.3s">
                            <br/>
                            <a download="Organigrama_forestales_uncp.pdf" href={OrganigramaPdf} className="btn btn-outline-success btn-sm">Descargar</a>
                        </div>
                        {/* <div className="col-lg-12 wow zoomIn" data-wow-delay="0.3s">
                            <br/>
                            <embed src={OrganigramaPdf} type="application/pdf" width="100%" height="600px" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}