import { Link } from "react-router-dom";
import StarWarsimg from "../assets/img/Star_Wars_Logo.svg.png";


export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-black mb-3 px-5">
			<Link to="/">
				{/* Imagen a la izquierda */}
				<img src={StarWarsimg} alt="Logo" style={{ width: "150px" }} />
			</Link>

			<div className="dropdown">
				<button
					className="btn dropdown-toggle fw-bold"
					type="button"
					data-bs-toggle="dropdown"
					style={{ backgroundColor: "#FCF259", color: "black" }}
				>
					Favorites <span className="badge bg-black text-white ms-2">0</span>
				</button>


				<ul className="dropdown-menu dropdown-menu-end" style={{ width: "200px" }}>
					{/* Mensaje si está vacío */}
					<li className="dropdown-item text-center text-muted">Empty</li>

					{/* Ejemplo de cómo será un favorito añadido */}
					<li className="d-flex justify-content-between align-items-center px-2 py-1">
						<span className="dropdown-item p-0">Luke Skywalker</span>
						<button className="btn btn-link text-dark p-0">
							<i className="fas fa-trash"></i>
						</button>
					</li>
				</ul>
			</div>


		</nav>
	);
};