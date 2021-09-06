import { createContext } from "react";

const initialState = {
    first: "Tony",
    last: "Montana",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;