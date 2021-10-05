import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export default function RestaurantProvider({ children }) {

    const userDefault  =  {
        userId: null,
        debit: null,
        tableId : null,
        name : null
    }

    const [user, setUser] = useState(userDefault);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext)
    const { user, setUser } = context
    return { user, setUser }
}