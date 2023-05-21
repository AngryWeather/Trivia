import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export const RouteSwitch: FC = () => {
    return (
        <BrowserRouter basename="/trivia">
            <App></App>
        </BrowserRouter>
    );
}