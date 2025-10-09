import m4 from "../assets/m4.avif";
import { FaShare } from "react-icons/fa";
import TheaterTimings from "../components/movies/TheaterTimings";
import { filters } from "../utils/constants";
const movie = {
    id: 4,
    title: "F1: The Movie",
    genre: ["Action","Drama","Sports"],
    rating: 9.5,
    votes: "6.8K",
    img: m4,
    languages: ["English, Hindi, Tamil, Telugu"],
    format: ["2D","3D","IMAX 3D"],
    certification: "UA16+",
    duration: "2h 24m",
    releaseDate: "2023-09-15",
    description: `F1: The Movie is a thrilling documentary that takes you behind the scenes of the high-octane world of Formula 1 racing. Directed by the acclaimed filmaker, this movie offers an in-depth look at the 2023 Formula 1 season, showcasing the intense competition, cutting-edge technology, and personal stories of the drivers and teams. with breathtaking footage from some of the most iconic cicuits around the globe, F1: The Movie captures the speed, precision, and drama that define this exhilarating sport. Whether you're a die-hard F1 fan or new to the world of motorsport, this film promises an unforgettable cinematic experience that celebrates the passion and dedication of everyone involoved in Formula 1.`
}

const MovieDetails = () => {
  return (
    <>
     {/* Movie Details Section */}
     <div className='relative text-white font-sans px-4 py-10'
        style={{
            backgroundImage: `url(${movie.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
     >
        {/* Overlay for darkness */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Actual Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
            {/* Poster */}
            <div>
                <img src={movie.img} alt={movie.title} className="rounded-xl w-52 shadow-xl" />
            </div>
            {/* Details */}
            <div className="flex flex-col justify-start flex-1 ">
                <h1 className="text-4xl font-bold mb-4">
                    {movie.title}
                </h1>
                <div className="flex items-center gap-4 mb-3">
                    <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                        <span className="text-pink-500 font-bold">
                            ★ {movie.rating}
                        </span>
                        <span className="text-gray-300">
                            {movie.votes} Votes
                        </span>
                        <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]">
                            Rate now
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm mb-4">
                    <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                        {movie.format.join(" ,")}
                    </span>
                    <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                        {movie.languages.join(",")}
                    </span>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                    {movie.duration} ◦ {movie.genre.join(",")} ◦ {" "}
                    {movie.certification} ◦ {" "}
                    {movie.releaseDate}
                </p>
                <div>
                    <h2 className="text-xl font-bold mb-2">About the movie</h2>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        {movie.description}
                    </p>
                </div>
            </div>

            
            {/* share button */}
            <div className="absolute top-0 right-0 cursor-pointer">
                <button className="cursor-pointer bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2">
                    <FaShare/>
                    Share
                </button>
            </div>
        </div>

        



        
     </div>
        <div className="relative  px-4 py-10 ">
            <div className='flex flex-col  max-w-7xl mx-auto  '>
                <div className="flex gap-4 mb-2">
                        {
                            filters.map((filters,i)=>(
                                <span className="border px-2 py-1 rounded border-gray-300 text-sm">
                                    {filters}
                                </span>
                            ))
                        }
                </div> 
                <hr  className="text-gray-300 mb-2"/> 
                <div className="flex border gap-5 px-5 py-1 bg-gray-200 border-none ">
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 mr-1 font-semibold bg-black rounded-full inline-block"></span>
                            <span className="font-semibold text-gray-500">Available</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 mr-1 font-semibold bg-yellow-400 rounded-full inline-block"></span>
                            <span className="font-semibold text-gray-500">Filling fast</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 mr-1 font-semibold bg-red-400 rounded-full inline-block"></span>
                            <span className="font-semibold text-gray-500">Almost Full</span>
                        </span>
                </div>

                {/* Theatres and timings */}

                <TheaterTimings/>

                  
            </div>
            
        </div>
    </>
  )
}

export default MovieDetails
