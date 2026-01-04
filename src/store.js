export const initialStore = () => {
    return {
        people: [],
        planets: [],
        vehicles: [],
        favorites: []
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'set_people':
            return {
                ...store,
                people: [...action.payload]
            };
        case 'set_planets':
            return {
                ...store,
                planets: action.payload
            };
        case 'set_vehicles':
            return {
                ...store,
                vehicles: action.payload
            };
       case 'add_favorite':
            // Comparamos por UID para asegurar unicidad absoluta
           
            return {
                ...store,
                favorites: [...store.favorites, action.payload]
            };
        case 'remove_favorite':
            return {
                ...store,
                // Filtramos por UID para que al borrar desde el Navbar, la Card lo detecte
                favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid)
            };
        default:
            return store;
    }
}