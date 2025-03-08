import { FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/website/logo.png";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];
const dropdownLinks = [
  {
    id: 1,
    name: "Trending Books",
    link: "/#",
  },
  {
    id: 2,
    name: "Bast Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Authors",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
            </a>
            Book
          </div>
          <div>
            <ul className="items-center gap-4 hidden sm:flex">
              {Menu.map((menu) => (
                <li>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {/* dropdown section */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex h-[72px] items-center gap-[2px]">
                  Quick Links{" "}
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>{" "}
                </a>
                {/* dropdown Link section */}
                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2">
                  <ul>
                    {dropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
