const arrayList = [
    { "id": "1", "name": "Dr. Mauro Rodríguez Cerrón", "fullName": "", "cargo": "Decano", "category": "" },
    { "id": "2", "name": "Dr. José Luis Claros Cuadrado", "fullName": "", "cargo": "Secretario Docente", "category": "" },
    { "id": "3", "name": "Dr. Jesús Eduardo Pomachagua Paucar", "fullName": "", "cargo": "Director de la Escuela Profesional - FCFA ", "category": "" },
    { "id": "4", "name": "Dra. Rosa Haydee Zárate Quiñonez", "fullName": "", "cargo": "Director del Departamento Académico – FCFA ", "category": "" },
    { "id": "5", "name": "Dr. Cirilo Walter Huamán Huamán", "fullName": "", "cargo": "Director del Instituto Especializado de Investigación – FCFA ", "category": "" },
    { "id": "6", "name": "Dr. Ronald Hector Révolo Acevedo", "fullName": "", "cargo": "Director de la Unidad de Posgrado – FCFA ", "category": "" },
    { "id": "7", "name": "M. Sc. Juana María Paucar Carrión", "fullName": "", "cargo": "Coordinador de Extensión Cultural y Proyección Social – FCFA ", "category": "" },
    { "id": "8", "name": "Dr. Ronald Hector Révolo Acevedo ", "fullName": "", "cargo": "Coordinador de Gestión de Calidad – FCFA ", "category": "" }
];

export default function ConsejoFacultad(props) {

    return (
        <>
            <div className="container-fluid py-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-0">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "1024px" }}>
                        <h3 className="mb-0 fw-bold">Son autoridades universitarias: el Rector, el Vice Rector Administrativo, el Vice Rector Académico y el Secretario de la Universidad.</h3>
                    </div>

                    <div className="row g-12 mb-12 pb-3 mb-5 mx-auto">

                        <div className="col-lg-12 wow zoomIn pt-3" data-wow-delay="0.1s">
                            <div className="container">

                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Cargo</th>
                                            <th scope="col">Responsable</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            arrayList.map((item, index) =>
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.cargo}</td>
                                                    <td>{item.name}</td>
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