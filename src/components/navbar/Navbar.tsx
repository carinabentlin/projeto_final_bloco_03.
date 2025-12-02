import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-4 bg-[#1B8F70] text-white shadow-md">
      <div className="container flex justify-between items-center mx-4 text-lg">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://ik.imagekit.io/sv3txjrcv/farmacia%20(1).svg?updatedAt=1764677254399"
            alt="Farmácia On"
            className="w-10 h-10 object-contain"
          />
          <span className="text-4xl font-bold tracking-wide">
            Farmácia On
          </span>
        </Link>

        {/* MENU */}
        <div className="flex gap-8 font-semibold text-2xl">
          <Link to="/categorias" className="hover:text-gray-200 transition">
            Categorias
          </Link>

          <Link to="/produtos" className="hover:text-gray-200 transition">
            Produtos
          </Link>

          <Link to="/login" className="hover:text-gray-200 transition">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}
