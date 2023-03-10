import { FaHome, FaRegUser, FaBook } from "react-icons/fa"
import TabButton from "./TabButton"


export default function Tabs() {
    return (
        <div className="absolute z-10 bottom-0 w-full flex justify-between items-center px-10 mt-auto border-none border-solid border-x-2 border-t-2 h-20 bg-white rounded-t-3xl shadow-custom-top">
            <TabButton icon={ <FaHome /> } url={"/"} />
            <TabButton icon={ <FaBook /> } url={"/history"} />
            <TabButton icon={ <FaRegUser /> } url={"/overview"} />
        </div>
    )
}
