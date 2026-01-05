const API_URL = "https://www.swapi.tech/api";

export const loadData = async (endpoint, dispatch) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`);
        const data = await response.json();

        // Buscamos los detalles de cada uno (gender, population, etc.)
        const detailedItems = await Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(item.url);
                const detailData = await res.json();
                return {
                    uid: item.uid,
                    name: item.name,
                    properties: detailData.result.properties
                };
            })
        );
        

        // Enviamos al store.js
        dispatch({
            type: `set_${endpoint}`, // Esto generará 'set_planets' o 'set_vehicles'
            payload: detailedItems
        });

    } catch (error) {
        console.error("Error en la descarga:", error);
    }
};

export const toggleFavorite = (item, store, dispatch) => {
    const isFavorite = store.favorites.some(fav => fav.name === item.name);
    dispatch({
        type: isFavorite ? 'remove_favorite' : 'add_favorite',
        payload: item
    });
};