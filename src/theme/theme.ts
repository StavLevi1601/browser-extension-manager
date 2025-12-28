import { createTheme, type PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
    interface TypeBackground {
        dark?: string;
        darkPaper?: string;
    }
}

export const theme = (mode: PaletteMode) => createTheme({
    palette: {
        mode,
        background: mode === "light"
            ? {
                default: "#EBF2FC",
                paper: "#FBFDFE",
            }
            : {
                default: "#091540",
                paper: "#202535",
            },
        primary: {
            main: "#091540",
            dark: "#FBFDFE",
        },
        secondary: {
            main: "#00A3FF",
            dark: "#C6C6C6",
        },
    },
    typography: {
        fontFamily: "Noto Sans, sans-serif",
        body1: {
            fontWeight: 700,
            fontSize: "20px",
        },
        body2: {
            fontWeight: 400,
            fontSize: "16px",
        }
    }
});
