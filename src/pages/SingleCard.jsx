
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import singleCharacterimg from "../assets/img/character1.jpg";

export const SingleCard = () => {
    const { type, theId } = useParams(); // Extrae los parámetros de la URL
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const getDetails = async () => {

              try {
                // Se ha corregido la URL con https://, /api/ y las barras / necesarias
                const response = await fetch(`https://www.swapi.tech/api/${type}/${theId}`);
                const data = await response.json();
                
                if (data.result && data.result.properties) {
                    setDetail(data.result.properties);
                }
            } catch (error) {
                console.error("Error en la descarga de detalles:", error);
            }
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
                        src={singleCharacterimg} 
                        className="img-fluid rounded shadow" 
                        alt={detail.name}
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
                                    <p className="fs-5 text-break">{Array.isArray(value) ? "Multiple items" : value}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};