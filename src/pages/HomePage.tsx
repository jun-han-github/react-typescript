import ActivityTable from "../components/ActivityTable";
import image from "../assets/images/mountain.jpg";

export default function HomePage() {

    const user = {
        name: "Junhan"
    }

    const quote = 'Welcome back, have fun here!';

    return (
        <div className="overflow-y-scroll">
            <div className="absolute z-negative top-0 h-80 w-full pt-12 bg-cover bg-no-repeat" style={{ backgroundImage:`url(${image})` }}>
                <div className="w-full bg-gradient-to-r from-white px-10 py-5">
                    <h1 className="font-bold text-2xl">Hi {user.name}!</h1>
                    <p className="font-medium text-xs">{quote}</p>
                </div>
            </div>
            <ActivityTable />
        </div>
    )
}
