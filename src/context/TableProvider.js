import React, { createContext, useState, useContext } from "react";

const TableContext = createContext();

export default function TableProvider({ children }) {

    const [TableCode, setTableCode] = useState(false);

    return (
        <TableContext.Provider
            value={{
                TableCode,
                setTableCode
            }}
        >
            {children}
        </TableContext.Provider>
    );
}

export function useTable() {
    const context = useContext(TableContext)
    const { TableCode, setTableCode } = context
    return { TableCode, setTableCode }
}