import { FaCamera, FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";

const hobbies = [
  { id: 1, name: "Photography", icon: <FaCamera />, description: "Capturing moments and telling stories through my lens." },
  { id: 2, name: "Sports", icon: <MdOutlineSportsCricket />, description: "Enjoying the Sports which involves physical and mental  Toughness ." },
  { id: 3, name: "Learning New Skills", icon: <FaBookOpen />, description: "Constantly upgrading my knowledge and discovering new interests." },
  { id: 4, name: "Exploring New Tech", icon: <FaLaptopCode />, description: "Keeping up with the latest trends and innovations in technology." },
];

export default function NonProfessionalLife() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="flex border border-zinc-700 flex-col items-center p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 text-center">
            <span className="text-5xl text-gray-300 mb-4">{hobby.icon}</span>
            <span className="text-lg font-medium text-gray-500 mb-2">{hobby.name}</span>
            <p className="text-sm text-gray-300">{hobby.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl  text-gray-400">Check Out My Photography Work</h3>
        <a
          href="https://www.instagram.com/tasweereyn?igsh=c2Uwb3FxMnJzaGhn"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block  border border-zinc-700 text-zinc-400 px-6 py-2 rounded-lg shadow-md hover:bg-zinc-700 transition-all"
        >
          View on Instagram
        </a>
      </div>
    </div>
  );
}
