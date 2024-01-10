
export default function Hero() {
    return (
        <div className="text-center p-10">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter text-gray-900 md:text-6xl">Uni scheduling made simple</h1>
            <p className="mb-6 text-lg text-gray-700">Experience university planning as it should be. UniScheduler.io is a dynamic scheduling tool that’s as ambitious as you are.</p>
            <div className="space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get your timetable!
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Explore UniScheduler.io
                </button>
            </div>
        </div>
    )
}
