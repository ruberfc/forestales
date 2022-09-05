import { useEffect, useState } from "react";

export default function ConsejoFacultad(props) {

    /*
    "condition": "",
    "category": "",
    "title": "",
    "degree": "",
    */
    const [data, setData] = useState([]);

    const getDocentes = () => {
        fetch("/src/assets/json/docentes.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(jsondata => {
                setData(jsondata.docentes);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getDocentes()
    }, [])

    return (
        <>
            <div className="container-fluid py-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-0">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "1024px" }}>
                        <h3 className="mb-0 fw-bold">Contanos con los mejores profesionales destacados a nivel regional y nacional.</h3>
                    </div>

                    <div className="row g-12 mb-12">
                        <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                            <table className="table table-striped table-hover">
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            let phone = item.phone === "" ? "" : item.phone

                                            return (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        <img className="img-fluid" style={{width: "70em"}} src={item.url}/>
                                                    </td>
                                                    <td>
                                                        <p><strong className="text-verde">{item.name}</strong></p>
                                                        <div className="row">
                                                            <small className="col-md-7 col-sm-12 my-0"><span className="">Titulo:</span> <strong>{item.title === "" ? "-" : item.title}</strong></small>
                                                            <small className="col-md-5 col-sm-12 my-0"><span className="">Condición:</span> <strong>{item.condition === "" ? "-" : item.condition}</strong></small>
                                                            <small className="col-md-7 col-sm-12 my-0"><span className="">Grado Académico:</span> <strong>{item.degree === "" ? "-" : item.degree}</strong></small>
                                                            <small className="col-md-5 col-sm-12 my-0"><span className="">Categoría:</span> <strong>{item.category === "" ? "-" : item.category}</strong></small>
                                                        </div>
                                                        <p className="text-justify fs-6 my-1">{item.description}</p>
                                                        <small>
                                                            <strong><i className="bi bi-envelope-fill"></i> {item.email}</strong> &nbsp;&nbsp;&nbsp;
                                                            <strong><i className={ item.phone ===""? "":"bi bi-phone-fill" }></i> {phone}</strong>
                                                        </small>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}