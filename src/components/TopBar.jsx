import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full border-b bg-brand-dark/80 text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@example.com</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+92 300 1234567</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-300 transition">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <Instagram size={16} />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
