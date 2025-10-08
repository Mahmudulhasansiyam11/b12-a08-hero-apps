import githubLogo from "../../../assets/github-logo.png";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const links = (
    <div className="flex flex-col md:flex-row gap-8">
      <div>
        <a
          className="inter-font font-semibold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:underline hover:decoration-[#9F62F2]"
          href=""
        >
          Home
        </a>
      </div>
      <div>
        <a
          className="inter-font font-semibold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:underline hover:decoration-[#9F62F2]"
          href=""
        >
          Apps
        </a>
      </div>
      <div>
        <a
          className="inter-font font-semibold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent hover:underline hover:decoration-[#9F62F2]"
          href=""
        >
          Installation
        </a>
      </div>
    </div>
  );

  return (
    <div className="">

        <div className="navbar bg-base-100 shadow-sm md:px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* NavBar Left Side */}

        <div className="flex justify-center items-center gap-[7px]">
          <div>
            <img className="w-10" src={logo} alt="" />
          </div>
          <div>
            <a className="inter-font font-bold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar right */}
      <div className="navbar-end">
        <a className="btn inter-font font-semibold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <img src={githubLogo} alt="" />
          Contribute
        </a>
      </div>
    </div>


    </div>
  );
};

export default NavBar;
