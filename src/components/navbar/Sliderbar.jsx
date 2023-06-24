import { AiFillInfoCircle } from "react-icons/ai";
import { FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const sideBarMenü = [
  { icon: <AiFillInfoCircle />, title: "Hakında", url: "/about" },
  { icon: <MdOutlineRestaurantMenu />, title: "Menü", url: "/menu" },
  { icon: <FiPhoneCall />, title: "İletişim", url: "/contact" },
  { icon: <RiLoginBoxFill />, title: "Giriş Yap", url: "/login" },
  { icon: <FiCheckCircle />, title: "Üye Ol", url: "/register" },
];

const Sliderbar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="bg-[#E12A32] lg:hidden xl:hidden fixed top-10
     z-40 w-64 h-screen pt-10 transition-transform -translate-x-full border-r border-gray-200  "
      aria-label="Sidebar"
    >
      <div className="  h-full px-3  overflow-y-auto bg-[#E12A32]">
        <ul className="space-y-2 font-medium ">
          {sideBarMenü.map((event,index) => (
            <li key={index}>
              <Link
                to={event.url}
                hreventf="#"
                className="flex items-center p-2 text-white  rounded-lg hover:bg-gray-100   hover:text-[#E12A32]"
              >
                {event.icon}
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {event.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sliderbar;
