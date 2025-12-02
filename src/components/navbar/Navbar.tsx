import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-4 bg-[#1B8F70] text-white shadow-md">
      <div className="container flex justify-between items-center mx-4 text-lg">

        {/* LOGO */}
       <Link to="/" className="text-2xl font-bold tracking-wide">
  Farmácia On
</Link>


        {/* MENU */}
        <div className="flex gap-6 font-medium">
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
