import React, { createContext, useState, useContext } from "react";

const RestaurantContext = createContext();

export default function RestaurantProvider({ children }) {

    const [restaurantCode, setRestaurantCode] = useState(false);

    return (
        <RestaurantContext.Provider
            value={{
                restaurantCode,
                setRestaurantCode
            }}
        >
            {children}
        </RestaurantContext.Provider>
    );
}

export function useRestaurant() {
    const context = useContext(RestaurantContext)
    const { restaurantCode, setRestaurantCode } = context
    return { restaurantCode, setRestaurantCode }
}