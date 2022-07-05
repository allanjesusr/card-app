import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { CardScreen } from "../components/CardScreen";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
                <Route path="/:cardId" element={ <CardScreen /> }/>

                <Route path="/*" element={ <Navigate to="/" /> }/>
            </Routes>
        </BrowserRouter>
    )
}
