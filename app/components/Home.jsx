const Home = () => {
    return (
        <div className="bg-[url('/Whittier-Basketball-Workout.jpg')] bg-cover bg-center h-[960px] relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 text-white text-center space-y-6">
                <h1 className="text-7xl font-bold">Basketball Clinics</h1>
                <h2 className="text-2xl font-bold">Improve & Prepare For The Season</h2>
                <button className="bg-red-600 px-10 py-4 font-semibold text-xl">VIEW CLINICS</button>
            </div>
        </div>
    );
}

export default Home;