import { Link } from "react-router-dom"

type Topic = {
    name: string
}

export default function Activity({ name }: Topic) {
    return (
        <Link to="/overview">
            <div className="bg-gradient-to-r from-sky-300 rounded-2xl h-20 my-3 pl-3 flex items-center">
                <div className="rounded-2xl min-w-56 w-14 h-14 flex justify-center items-center bg-pink-100">Icon</div>

                <div className="pl-3 flex flex-col justify-start items-left">
                    <div className="rounded-full bg-orange-300 text-indigo-900 w-fit m-0 px-2 py-0.5 text-2xs">AWS Cloud Infrastructure</div>
                    <div>
                        <p className="text-sm m-0 leading-tight">EC2 Instance Types (such as T3, M5)</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
