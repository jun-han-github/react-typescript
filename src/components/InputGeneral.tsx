import { capitalizeFirst } from "../shared/stringHelper"

interface InputProp {
    title: string,
    type: string,
    inputHandler: (value: string) => void
}

export default function InputGeneral({ title, type, inputHandler}: InputProp) {

    return (
        <div className="flex flex-col px-3 py-1">
            <label className="mb-1 font-medium">{ capitalizeFirst(title) }</label>
            <input
                type={type}
                onChange={(e) => inputHandler(e.target.value)}
                className="rounded-xl h-10 text-black pl-3 bg-white bg-opacity-50 border-transparent focus:border-transparent focus:ring-0" />
        </div>
    )
}
