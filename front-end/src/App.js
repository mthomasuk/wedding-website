import React from "react";
import { CookiesProvider } from "react-cookie";
import Routes from "./Routes";

export default function Root() {
    return (
        <CookiesProvider>
            <Routes />
        </CookiesProvider>
    );
}
