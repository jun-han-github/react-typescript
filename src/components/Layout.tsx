import { Outlet, useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import { useEffect } from "react";

export default function Layout() {
    const auth = false;
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    }, [auth, navigate]);

    return (
        <main className="flex flex-col max-h-screen">
            <Outlet />
            <Tabs />
        </main>
    )
}
