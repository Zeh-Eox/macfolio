import dayjs from "dayjs";
import { navIcons, navLinks } from "@/constants";
import useWindowStore from "@/store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
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
            <li key={id} className="inline-block mx-2">
              <img src={img} alt="icon" />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("MMMM D YYYY - h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
