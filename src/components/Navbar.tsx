import dayjs from "dayjs";
import { navIcons, navLinks } from "@/constants";
import useWindowStore from "@/store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      flex items-center justify-between
      px-6 py-3
      bg-white/10
      backdrop-blur-xl
      border-b border-slate-500/60
      shadow-lg
      rounded
    "
    >
      <div className="text-[#f1f1f1]">
        <img src="/images/logo.svg" alt="Logo" className="mb-1" />
        <p className="font-bold">Arnold's MacFolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="inline-block mx-2 color-white">
              <img src={img} alt="icon" />
            </li>
          ))}
        </ul>

        <time className="text-white">
          {dayjs().format("MMMM D YYYY - h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
