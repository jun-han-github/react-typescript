
type Topic = {
    name: string
}

export default function Activity({ name }: Topic) {
    return (
        <div className="border-2 border-solid border-grey rounded-xl h-16 p-3 my-2">
            { name }
        </div>
    )
}
