import React from "react";

import { Link } from "react-router-dom";
import singleCharacterimg from "../assets/img/character1.jpg";
import singlePlanetimg from "../assets/img/Planets1.jpg"
import singleVehicleimg from "../assets/img/Vehicle1.jpg"
import useGlobalReducer from "../hooks/useGlobalReducer";



export const Card = ({ item, endpoint }) => {
    
     let cardImage;
    if (endpoint === "people") {
        cardImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/characters/${item.uid}.jpg`;
    } else if (endpoint === "planets") {
        cardImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/planets/${item.uid}.jpg`;
    } else {
        cardImage = `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${item.uid}.jpg`;
    }
    
     const { store, dispatch } = useGlobalReducer();
     
    const isFavorite = store.favorites.find(
        (fav) => fav.endpoint === endpoint && String(fav.uid) === String(item.uid)
    );

        
    

    
    const handleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "remove_favorite", payload: item });
        } else {
            
            dispatch({ type: "add_favorite", payload: { ...item, endpoint: endpoint } });
        }
    };

    return (
        <div className="card bg-dark text-white h-100 neon-card" style={{ border: "1px solid #FCF259", borderRadius: "10px" }}>
            
            <img 
             src={cardImage} 
                className="card-img-top" 
                alt={item.name} 
               style={{ height: "250px", objectFit: "cover" }}
            />
            
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-warning fw-bold">{item.name}</h5>
                
                
                <div className="card-text mb-4" style={{ fontSize: "0.9rem" }}>
                    {endpoint === "people" && (
                        <>
                            <p className="mb-1">Gender: {item.properties?.gender || "n/a"}</p>
                            <p className="mb-1">Hair Color: {item.properties?.hair_color || "n/a"}</p>
                            <p className="mb-1">Eye Color: {item.properties?.eye_color || "n/a"}</p>
                        </>
                    )}
                    {endpoint === "planets" && (
                        <>
                            <p className="mb-1">Population: {item.properties?.population || "n/a"}</p>
                            <p className="mb-1">Diameter: {item.properties?.diameter || "n/a"}</p>
                        </>
                    )}
                    {endpoint === "vehicles" && (
                        <>
                            <p className="mb-1">Model: {item.properties?.model || "n/a"}</p>
                            <p className="mb-1">Passengers: {item.properties?.passengers || "n/a"}</p>
                        </>
                    )}
                </div>

                
                <div className="d-flex justify-content-between mt-auto">
                    <Link to={`/singleCard/${endpoint}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>

               <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`} 
                        onClick={handleFavorite}
                    >
                        <i className={`${isFavorite ? "fas" : "far"} fa-heart`}></i>
                    </button>
                   
                </div>
            </div>
          </div>
    );
};