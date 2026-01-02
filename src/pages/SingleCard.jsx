
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleCard = () => {
    const { type, theId } = useParams(); // Extrae los parámetros de la URL
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            // Petición a la API usando el tipo y el ID
            const response = await fetch(`www.swapi.tech{type}/${theId}`);
            const data = await response.json();
            setDetail(data.result.properties);
        };
        getDetails();
    }, [type, theId]);

    if (!detail) return <h2 className="text-center text-warning mt-5">Cargando detalles...</h2>;

    // Ajuste de nombre para la guía visual
    const visualCategory = type === "people" ? "characters" : type;

    return (
        <div className="container mt-5 bg-dark text-white p-4 rounded border border-warning">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={`starwars-visualguide.com{visualCategory}/${theId}.jpg`} 
                        className="img-fluid rounded shadow" 
                        alt={detail.name}
                        onError={(e) => e.target.src = "starwars-visualguide.com"}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="display-4 text-warning fw-bold">{detail.name}</h1>
                    <p className="lead mt-3">Información detallada procedente de los archivos de la República.</p>
                    <hr className="border-warning my-4" />
                    
                    <div className="row">
                        {Object.entries(detail).map(([key, value]) => (
                            // Filtramos campos que no queremos mostrar como la URL o fechas
                            !["url", "created", "edited", "name"].includes(key) && (
                                <div className="col-6 mb-3" key={key}>
                                    <h6 className="text-warning text-uppercase small m-0">{key.replace("_", " ")}</h6>
                                    <p className="fs-5">{value}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};