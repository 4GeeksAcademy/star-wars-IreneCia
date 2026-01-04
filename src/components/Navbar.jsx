import { Link } from "react-router-dom";
import StarWarsimg from "../assets/img/Star_Wars_Logo.svg.png";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

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
					Favorites <span className="badge bg-black text-white ms-2">{store.favorites.length}</span>
				</button>


				<ul className="dropdown-menu dropdown-menu-end" style={{ width: "200px" }}>
					{store.favorites.length === 0 ? (
                        <li className="dropdown-item text-center text-muted">Empty</li>
                    ) : (
                        // Mapeamos los favoritos reales del store
                        store.favorites.map((fav) => (
                            <li key={fav.uid} className="d-flex justify-content-between align-items-center px-2 py-1">
                                <Link 
                                    to={`/singleCard/${fav.endpoint}/${fav.uid}`} 
                                    className="dropdown-item p-0 text-decoration-none text-dark"
                                >
                                    {fav.name}
                                </Link>
                                <button 
                                    className="btn btn-link text-dark p-0"
                                    onClick={() => dispatch({ type: "remove_favorite", payload: fav })}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};
