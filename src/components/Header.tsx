import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between top-0 sticky z-10 bg-red-200 border-b-4 border-b-gray-400 p-4">
      <h1 className="text-5xl">Pokédex</h1>
      <nav className="flex gap-4 w-[50%] justify-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) => (isActive  ? "underline" : "")}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
