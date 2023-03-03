import Activity from "./Activity";

export default function ActivityTable() {

    const questions = Array.from({length: 30}, (_, i) => i + 1);

    return (
        <div className="bg-white mt-48 px-6 pt-6 pb-24 rounded-t-3xl">
            <div>
                {
                    questions.map((question: any) => (
                        <Activity name={question} />
                    ))
                }
            </div>
        </div>
    );
}
