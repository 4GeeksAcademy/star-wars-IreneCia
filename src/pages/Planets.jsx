import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { loadData } from "../actions";
import { Card } from "../components/Card"


export const Planets = () => {
    const { store, dispatch } = useGlobalReducer();
useEffect(() => {
    if (store.planets.length === 0) loadData("planets", dispatch);
}, []);


    return (
        <div className="container-fluid mt-5 px-5">
            <h1 className="text-warning mb-4 fw-bold">PLANETS</h1>

            {/* Contenedor con scroll horizontal */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {store.planets.map((item) => (
                    <div className="col d-flex justify-content-center" key={item.uid}>
                        <Card item={item} endpoint="planets" />
                    </div>
                ))}
            </div>
        </div>
    );
};