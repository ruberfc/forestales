import './App.css'
// import './assets/css/animate.min.css'
// import './assets/css/owl.carousel.min.css'
import { BrowserRouter, Routes, Route, useLocation
 } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Load from './app/inicio/load'
import Menu from './app/inicio/menu'
import Home from './app/inicio/home'
import Footer from './app/inicio/footer'
import NotFound from './app/inicio/notFound'

import Historia from './app/facultad/historia'
import MisionVision from './app/facultad/mision-vision/mision-vision'
import PoliticaAmbiental from './app/facultad/mision-vision/politica-ambiental'
import ConsejoFacultad from './app/facultad/consejo-facultad/consejo-facultad'
import Proposito from './app/facultad/mision-vision/proposito'

import Organigrama from './app/facultad/organigrama'
import Autoridades from './app/facultad/autoridades'
import PlanaDocente from './app/facultad/plana-docente'


function App(props) {

	// console.log('hash', location.hash);
	// console.log('pathname', location.pathname);
	// console.log('search', location.search);

	const [count, setCount] = useState(0)

	useEffect(() => {

	}, [])

	return (
		<div>

			<div className="container-fluid bg-azul px-5 d-none d-lg-block">
				<div className="row gx-0">
					<div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
						<div className="d-inline-flex align-items-center">
							<small className="me-3"><i className="bi bi-geo-alt-fill me-2 text-white"></i><a
								href="https://goo.gl/maps/41Z8tx9eoJanJjRK8" target="_blank"
								className="badge bg-white text-azul text-decoration-none"> Av. Mariscal Castilla N°
								3909 Pabellon A</a></small>
							<small className="me-3 text-white">&nbsp;<i className="bi bi-envelope-fill me-2"></i>
								forestales@uncp.edu.pe</small>
							<small className="text-white">&nbsp;<i className="bi bi-phone-fill me-2"></i> 481060 anexo 7016</small>
						</div>
					</div>
					<div className="col-lg-4 text-center text-lg-end">
						<div className="d-inline-flex align-items-center">
							<a className="btn btn-sm bg-white rounded-circle mx-1" target="_blank"
								href="https://web.whatsapp.com/"><i className="bi bi-whatsapp text-azul"></i></a>
							<a className="btn btn-sm bg-white rounded-circle" target="_blank"
								href="https://www.facebook.com/Facultad-de-Ciencias-Forestales-y-del-Ambiente-UNCP-135570359810730/?_rdc=1&_rdr"><i
									className="bi bi-facebook text-azul"></i></a>
							<a className="btn btn-sm bg-white rounded-circle mx-1" target="_blank"
								href="https://www.youtube.com/channel/UCayEc8TPglHCHgxLRJXWYpg"><i
									className="bi bi-youtube text-azul"></i></a>

						</div>
					</div>
					<div className="col-lg-12 text-center">
						<span className="m-0"><strong className="fs-4 text-white">CIENCIAS FORESTALES Y DEL AMBIENTE</strong></span>
					</div>
				</div>
			</div>

			<BrowserRouter>
				<div className="container-fluid position-relative p-0">
					<Menu />
					{/* {location.pathname} */}
				</div>
				<br />
				<Routes>
					{/* Facultad */}
					<Route exact path="/" element={<Home />} />
					<Route exact path="/historia" element={<Historia />} />
					<Route exact path="/mision-vision" element={<MisionVision />} />
					<Route exact path="/politica-ambiental" element={<PoliticaAmbiental />} />
					<Route exact path="/proposito" element={<Proposito />} />
					<Route exact path="/consejo-facultad" element={<ConsejoFacultad />} />
					<Route exact path="/organigrama" element={<Organigrama />} />
					<Route exact path="/autoridades" element={<Autoridades />} />
					<Route exact path="/plana-docente" element={<PlanaDocente />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
