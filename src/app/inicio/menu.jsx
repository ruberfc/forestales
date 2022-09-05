import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import Logo from '../../assets/img/logo.png'


export default function Menu(props) {

    useEffect(() => {

        /*
        document.addEventListener('click',function(e){
            // Hamburger menu
            if(e.target.classList.contains('hamburger-toggle')){
              e.target.children[0].classList.toggle('active');
            }
          }) 

        
        if (window.innerWidth < 992) {

            // close all inner dropdowns when parent is closed
            document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
                everydropdown.addEventListener('hidden.bs.dropdown', function () {
                    // after dropdown is hidden, then find all submenus
                    this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                        // hide every submenu as well
                        everysubmenu.style.display = 'none';
                    });
                })
            });

            document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
                element.addEventListener('click', function (e) {
                    let nextEl = this.nextElementSibling;
                    if (nextEl && nextEl.classList.contains('submenu')) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault();
                        if (nextEl.style.display == 'block') {
                            nextEl.style.display = 'none';
                        } else {
                            nextEl.style.display = 'block';
                        }

                    }
                });
            })
        }
        */

    })

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark px-3 py-3 py-lg-0 bg-verde">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand p-0">
                        <img className="img-fluid" src={Logo} width={100} title="CIENCIAS FORESTALES Y DELAMBIENTE"
                            style={{ position: "relative" }} />
                    </Link>
                    <button className="navbar-toggler btn btn-warning" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown" id="myDropdown1">
                                <a className="nav-link dropdown-toggle mx-1 active" href="#" data-bs-toggle="dropdown"><span
                                    className="fs-12 fw-bold">FACULTAD</span></a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="./11historia.html">Historia</Link></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#"><span>Misión,
                                        Visión, Política y Próposito</span> <span
                                            className="text-success">&raquo;</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a className="dropdown-item" href="./121mision-vision.html">Misión, visión y
                                                política de calidad </a>
                                            </li>
                                            <li><a className="dropdown-item" href="./122politica-ambiental.html">Política
                                                ambiental</a></li>
                                            <li><a className="dropdown-item" href="./123proposito.html">Propósito</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#"><span>Consejo de
                                        facultad</span> <span className="text-success">&raquo;</span></a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a className="dropdown-item" href="./131miembro.html">Miembros</a></li>
                                            <li><a className="dropdown-item" href="./132acta.html">Actas</a></li>
                                            <li><a className="dropdown-item" href="./133resoluciones.html">Resoluciones</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="./14organigrama.html">Organigrama</a></li>
                                    <li><a className="dropdown-item" href="./15autoridad.html">Organigrama</a></li>
                                    <li><a className="dropdown-item" href="./16plana-docente.html">Plana docente</a></li>
                                    <li><a className="dropdown-item" href="./17resolucion-decanal.html">Resoluciones
                                        decanales</a></li>
                                    <li><a className="dropdown-item" href="./18convenio.html">Convenios</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* <nav className="navbar navbar-expand-lg bg-verde">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}


        </>
    )
}