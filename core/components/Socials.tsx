import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/smantass/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400"
      >
        <FaFacebookF className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/smansby17/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400"
      >
        <FaInstagram className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com/IASmantass"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400"
      >
        <FaXTwitter className="w-6 h-6" />
      </a>
    </div>
  );
}