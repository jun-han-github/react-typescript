export default function ActivityTable() {

    const questions = Array.from({length: 30}, (_, i) => i + 1);

    return (
        <div className="bg-white mt-48 px-6 pt-6 pb-24 max-h-screen overflow-y-scroll rounded-3xl">
            <div>
                {
                    questions.map(question => (
                        <div className="border-2 border-solid border-black rounded my-2">Topic {question}</div>
                    ))
                }
            </div>
        </div>
    );
}
