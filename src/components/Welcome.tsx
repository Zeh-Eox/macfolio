import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface RenderTextProps {
  text: string;
  className: string;
  baseWeight?: number;
}

interface SetupTextHoverProps {
  container: React.RefObject<HTMLElement | null>;
  type: "title" | "subtitle";
}

interface FontWeightRange {
  min: number;
  max: number;
  default: number;
}

interface FontWeightsProps {
  title: FontWeightRange;
  subtitle: FontWeightRange;
}

interface AnimateLetterProps {
  letter: HTMLElement;
  weight: number;
  duration: number;
}

const FONT_WEIGHTS: FontWeightsProps = {
  title: { min: 400, max: 900, default: 400 },
  subtitle: { min: 100, max: 400, default: 100 },
};

const renderText = ({ text, className, baseWeight = 400 }: RenderTextProps) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = ({ container, type }: SetupTextHoverProps) => {
  if (!container.current) return;

  const letters = container.current?.querySelectorAll("span");
  if (!letters) return;

  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = ({
    letter,
    weight,
    duration = 0.25,
  }: AnimateLetterProps) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`,
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    const { left } = container.current!.getBoundingClientRect();
    const mouseX = event.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetter({
        letter,
        weight: min + (max - min) * intensity,
        duration: 0.1,
      });
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter({
        letter,
        weight: base,
        duration: 0.3,
      });
    });
  };

  container.current.addEventListener("mousemove", handleMouseMove);
  container.current.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.current?.removeEventListener("mousemove", handleMouseMove);
    container.current?.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const titleCleanUp = setupTextHover({ container: titleRef, type: "title" });
    const subTitleCleanUp = setupTextHover({
      container: subtitleRef,
      type: "subtitle",
    });

    return () => {
      titleCleanUp && titleCleanUp();
      subTitleCleanUp && subTitleCleanUp();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText({
          text: "Hey, I'm Arnold Jonas CONVOLBO! Welcome to my",
          className: "text-3xl font-georama",
          baseWeight: 100,
        })}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText({
          text: "Portfolio",
          className: "text-9xl italic font-georama",
          baseWeight: 400,
        })}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens only</p>
      </div>
    </section>
  );
};

export default Welcome;
