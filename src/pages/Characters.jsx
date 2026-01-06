import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { loadData } from "../actions";
import { Card } from "../components/Card"


export const Characters = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        
        if (store.people.length === 0) {
            loadData("people", dispatch);
        }
    }, []);
    console.log(store.people)
    return (
        <div className="container-fluid mt-5 px-5">
            <h1 className="text-warning mb-4 fw-bold">CHARACTERS</h1>

            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {store.people.map((item) => (
                    <div className="col d-flex justify-content-center" key={item.uid}>
                        <Card item={item} endpoint="people" />
                    </div>
                ))}
            </div>
        </div>
    );
};