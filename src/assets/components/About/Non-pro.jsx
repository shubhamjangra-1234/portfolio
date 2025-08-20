import { FaCamera, FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { motion } from "framer-motion";
const hobbies = [
  { id: 1, name: "Photography", icon: <FaCamera />, description: "Capturing moments and telling stories through my lens." },
  { id: 2, name: "Sports", icon: <MdOutlineSportsCricket />, description: "Enjoying the Sports which involves physical and mental  Toughness ." },
  { id: 3, name: "Learning New Skills", icon: <FaBookOpen />, description: "Constantly upgrading my knowledge and discovering new interests." },
  { id: 4, name: "Exploring New Tech", icon: <FaLaptopCode />, description: "Keeping up with the latest trends and innovations in technology." },
];

export default function NonProfessionalLife() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div
    initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
    className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="flex border border-zinc-700 flex-col items-center p-6 shadow-lg rounded-lg transition-transform transform hover:scale-95 text-center">
            <span className="text-5xl text-purple-600 mb-4">{hobby.icon}</span>
            <span className="text-lg font-medium text-blue-800 mb-2">{hobby.name}</span>
            <p className="text-xs text-gray-900">{hobby.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className=" text-sm text-blue-800">Check Out My Photography Work</h3>
        <a
          href="https://www.instagram.com/tasweereyn?igsh=c2Uwb3FxMnJzaGhn"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm border border-zinc-700 text-blue-800 px-6 py-2 rounded-md  transition-all"
        >
          View on Instagram
        </a>
      </div>
    </motion.div>
  );
}
