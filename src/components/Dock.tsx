import { dockApps } from "@/constants";
import { Tooltip } from "react-tooltip";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dockElement = dockRef.current;
    if (!dockElement) return () => {};

    const icons = dockElement.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left } = dockElement.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + intensity * 0.5,
          y: -intensity * 15,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dockElement.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    dockElement.addEventListener("mousemove", handleMouseMove);
    dockElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      dockElement.removeEventListener("mousemove", handleMouseMove);
      dockElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = (appName: string) => {
    // Function to handle opening/closing apps
    console.log(`Toggling app: ${appName}`);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id ?? name} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp(name)}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
