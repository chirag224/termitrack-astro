import { FaFacebook, FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function TopBar() {
  return (
    <div className=" bg-yellow-400 text-black py-2">
      <div className="container mx-auto flex justify-end sm:justify-between items-center px-4 md:px-8">
        {/* Contact Info */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="flex items-center">
            <BsFillTelephoneFill className=" mr-2" />
            <span>922 345 3450</span>
          </a>
          <a href="#" className="flex items-center">
            <MdEmail className=" mr-2" />
            <span>info@termitrack.com</span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-black rounded-full overflow-hidden">
          <input
            type="search"
            placeholder="Search Here"
            className="px-4 py-1 text-black focus:outline-none"
          />
          <button className="px-3 py-1 bg-black text-yellow-400">
            <FaSearch />
          </button>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex sm:space-x-4 sm:text-lg">
          <a href="#" className="hover:text-gray-700">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-gray-700">
            <RiInstagramFill />
          </a>
          <a href="#" className="hover:text-gray-700">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
