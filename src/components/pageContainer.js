import React, { useState } from "react";
import NavBar from "./navbar";
import Portfolio from "./portfolio";
import About from "./aboutMe";
import Resume from "./resume";
import Contact from "./contact";

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState("About");
    const renderPage = () => {
        switch (currentPage) {
        case "About":
            return <About />;
        case "Portfolio":
            return <Portfolio />;
        case "Resume":
            return <Resume />;
        default:
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}