import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <div className="app">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
