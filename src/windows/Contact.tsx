import WindowControls from "@/components/WindowControls";
import { socials } from "@/constants";
import WindowWrapper from "@/hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/arnold-contact.jpg"
          alt="Arnold"
          className="w-20 h-20 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p className="py-3">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={`${id}-${link}`} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper({
  Component: Contact,
  windowKey: "contact",
});

export default ContactWindow;
