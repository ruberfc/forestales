const arrayList = [
    { "id": "1", "name": "Dr. Mauro Rodríguez Cerrón", "fullName": "", "representative": "Presidente", "category": "" },
    { "id": "2", "name": "Dr. Hugo Wenceslao Miguel Miguel", "fullName": "", "representative": "Principal", "category": "" },
    { "id": "3", "name": "Dr. Edwin Zorrilla Delgado", "fullName": "", "representative": "Principal", "category": "" },
    { "id": "4", "name": "Dr. Ronald Révolo Acevedo", "fullName": "", "representative": "Asociado", "category": "" },
    { "id": "5", "name": "Dr. Emilio Osorio Berrocal", "fullName": "", "representative": "Asociado", "category": "" },
    { "id": "6", "name": "M. Sc. José Claros Cuadrado", "fullName": "", "representative": "Auxiliar", "category": "" },
    { "id": "7", "name": "Estefani Luz Elias Hinostroza", "fullName": "", "representative": "Tercio estudiantil", "category": "" },
    { "id": "8", "name": "Sergio José Poma Buendía", "fullName": "", "representative": "Tercio estudiantil", "category": "" },
    { "id": "9", "name": "Nicol Pamela Huaringa Olivera", "fullName": "", "representative": "Tercio estudiantil", "category": "" },
    { "id": "10", "name": "Ing. Bryan Fredy Yarupaita Echevarría", "fullName": "", "representative": "Representante de Graduados", "category": "" }
];

export default function ConsejoFacultad(props) {

    return (
        <>
            <div className="container-fluid py-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-0">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "1024px" }}>
                        <h3 className="mb-0 fw-bold">El Consejo de Facultad es la máxima dirección de cada facultad y se constituye como un órgano permanente con capacidad decisoria.</h3>
                    </div>

                    <div className="row g-12 mb-12 pb-3 mb-5 mx-auto">

                        <div className="col-lg-12 wow zoomIn pt-3" data-wow-delay="0.1s">
                            <div className="container">

                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombres y Apellidos</th>
                                            <th scope="col">Representante/Categoría</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            arrayList.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.representative}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}