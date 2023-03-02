import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

export default function Layout() {
    return (
        <main className="flex flex-col max-h-screen">
            <Outlet />
            <Tabs />
        </main>
    )
}
