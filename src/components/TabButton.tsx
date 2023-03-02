import { ReactNode } from "react";
import { Link } from "react-router-dom";

type IconProps = React.HTMLAttributes<HTMLElement> & {
  icon: ReactNode;
  url: string
};

export default function TabButton({icon, url}: IconProps) {
    return(
        <Link to={ url }>
            <button className="rounded-full p-5 shadow-2xl">
                { icon }
            </button>
        </Link>
    )
}
