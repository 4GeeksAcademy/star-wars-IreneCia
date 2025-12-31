
import Charactersimg from "../assets/img/characters2.jpeg";
import Planetsimg from "../assets/img/planets.jpeg";
import Vehiclesimg from "../assets/img/vehicles.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React from "react";


export const Home = () => {

  return (
       <div className="container mt-5">
      <h1 className="text-center text-warning mb-5 fw-bold">QUE LA FUERZA TE ACOMPAÑE</h1>
      
      <div className="row justify-content-center g-4">
        {/* Categoría: Personajes */}
        <div className="col-12 col-md-4">
          <Link to="/characters" className="text-decoration-none">
            <div className="card bg-black text-white h-100 shadow" style={{ border: "2px solid #FCF259", borderRadius: "20px", overflow: "hidden" }}>
              

              <img src={Charactersimg} className="card-img-top" alt="Characters" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h3 className="card-title" style={{ color: "#FCF259" }}>CHARACTERS</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Categoría: Planetas */}
        <div className="col-12 col-md-4">
          <Link to="/planets" className="text-decoration-none">
            <div className="card bg-black text-white h-100 shadow" style={{ border: "2px solid #FCF259", borderRadius: "20px", overflow: "hidden" }}>
              <img src={Planetsimg} className="card-img-top" alt="Planets" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h3 className="card-title" style={{ color: "#FCF259" }}>PLANETS</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* Categoría: Vehículos */}
        <div className="col-12 col-md-4">
          <Link to="/vehicles" className="text-decoration-none">
            <div className="card bg-black text-white h-100 shadow" style={{ border: "2px solid #FCF259", borderRadius: "20px", overflow: "hidden" }}>
              <img src={Vehiclesimg} className="card-img-top" alt="Vehicles" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h3 className="card-title" style={{ color: "#FCF259" }}>VEHICLES</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};