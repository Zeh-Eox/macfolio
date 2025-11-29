import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useLayoutEffect } from "react";

type WindowsState = ReturnType<typeof useWindowStore.getState>["windows"];

interface WindowWrapperProps {
  Component: React.ComponentType<any>;
  windowKey: keyof WindowsState;
}

const WindowWrapper = ({ Component, windowKey }: WindowWrapperProps) => {
  const Wrapped = (props: any) => {
    const { windows, focusWindow } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return () => {};

      if (isOpen) {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(element, {
          opacity: 0,
          scale: 0.8,
          y: 40,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            if (element) {
              element.style.display = "none";
            }
          },
        });
      }
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return () => {};

      const [instance] = Draggable.create(element, {
        onPress: () => {
          focusWindow(windowKey);
        },
      });

      return instance.kill;
    }, [focusWindow, windowKey]);

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;

      element.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
