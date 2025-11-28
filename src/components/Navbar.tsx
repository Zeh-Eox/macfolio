import dayjs from "dayjs";
import { navIcons, navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Arnold's MacFolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id} className="inline-block mx-4">
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
