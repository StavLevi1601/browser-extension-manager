import './App.css'
import MainLayout from "./layout/MainLayout.tsx";
import Home from "./pages/Home/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import { ThemeProvider } from '@emotion/react';
import {CssBaseline, type PaletteMode} from "@mui/material";
import {useState} from "react";
import { theme } from "./theme/theme.ts";

function App() {
    const [mode, setMode] = useState<PaletteMode>("light");

    return (
        <ThemeProvider theme={theme(mode)}>
            <CssBaseline/>
            <BrowserRouter>
                <MainLayout>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home toggleMode={() => setMode(mode === "light" ? "dark" : "light")} mode={mode}/>
                            }
                        />
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </ThemeProvider>
    )
}


export default App
