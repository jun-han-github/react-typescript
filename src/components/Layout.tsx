import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

export default function Layout() {
    return (
        <main className="flex flex-col h-screen">
            <Outlet />
            <Tabs />
        </main>
    )
}
