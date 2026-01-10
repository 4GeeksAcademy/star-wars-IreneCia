import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { loadData } from "../actions";
import { Card } from "../components/Card"


export const Planets = () => {
    const { store, dispatch } = useGlobalReducer();
    const [loading, setLoading] = useState(true); //si esta cargando


    useEffect(() => {

        const fetchData = async () => {

            //verificamos qu ela lista este vacia

            if (store.planets.length === 0) {
                setLoading(true); //encendemos el mensaje de carga


                await loadData("planets", dispatch); //esperamos a qu la Api termine

                setLoading(false); //el mensaje se apaga

            } else {
                setLoading(false); //si habia datos, el mensaje se apaga
            }
        };

        fetchData();
    }, []); //se ejecuta solo al montar el componente


    return (
        <div className="container-fluid mt-5 px-5">
            <h1 className="text-warning mb-4 fw-bold">PLANETS</h1>

             {loading === true ? (

              <div className="d-flex flex-column align-items-center justify-content-center mt-5 py-5">
        
        <div className="mb-4" style={{ color: "#00d4ff", filter: "drop-shadow(0 0 10px #00d4ff)" }}>
            <i className="fas fa-jedi fa-spin fa-5x"></i>
        </div>

                    <h2 className="text-warning fw-bold animate__animated animate__pulse animate__infinite">
                        LA FUERZA ESTÁ LLEGANDO...
                    </h2>
                    <p className="text-muted fs-5">Buscando datos en una galaxia muy, muy lejana...</p>
                </div>
            ) : (


            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {store.planets.map((item) => (
                    <div className="col d-flex justify-content-center" key={item.uid}>
                        <Card item={item} endpoint="planets" />
                    </div>
                ))}
            </div>
             )}
        </div>
    );
};