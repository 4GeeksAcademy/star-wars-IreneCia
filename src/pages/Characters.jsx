import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { loadData } from "../actions";
import { Card } from "../components/Card"


export const Characters = () => {
    const { store, dispatch } = useGlobalReducer();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {


            //solo se cargara si hay datos 
            if (store.people.length === 0) {
                // el spinner esta "encendido"
                setLoading(true);
                // con el await el codigo se para aqui hast aque loadData termine
                await loadData("people", dispatch);

                //cuando la API responde, apagamos el spinner

                setLoading(false);

            } else {

                //si ya habia datos, el spinner se apaga
                setLoading(false);
            }


        };
        fetchData();

    }, []); //esto hace que se ejecute solo al montar el componente
    


    return (


        <div className="container-fluid mt-5 px-5">
            <h1 className="text-warning mb-4 fw-bold">CHARACTERS</h1>

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
                    {store.people.map((item) => (
                        <div className="col d-flex justify-content-center" key={item.uid}>
                            <Card item={item} endpoint="people" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};