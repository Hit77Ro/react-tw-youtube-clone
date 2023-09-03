import { Link } from "react-router-dom";
import { logo } from "../utils";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "../style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`search/${searchTerm}`);
    setSearchTerm('')
  };
  return (
    <nav className="bg-black-gradient-2  fixed inset-0 z-20 h-[70px]">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="youtube clone logo" className="h-[50px]" />
        </Link>
        <form
          onSubmit={handleSubmit}
          className="relative flex w-[250px] items-center  justify-end overflow-hidden rounded-3xl p-6"
        >
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            placeholder="search..."
            className="absolute inset-0 h-full w-full pl-3 outline-none"
          />
          <button
            type="submit"
            className={`absolute right-0 flex h-[50px] w-[50px]  rounded-full bg-slate-100 text-2xl hover:bg-red-100 ${styles.flexCenter}`}
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
