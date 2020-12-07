import React from "react"

const loggedInContext = React.createContext();

export const Provider = loggedInContext.Provider;
export const Consumer = loggedInContext.Consumer;