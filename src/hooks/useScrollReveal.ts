import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to an element plus a `visible` flag that flips to
 * true (once, permanently) when the element scrolls into view.
 *
 * - State-driven, so React owns the class name and a re-render can never
 *   wipe the "visible" state.
 * - threshold 0 + a small bottom margin: the reveal fires as soon as the top
 *   of the element clears the bottom of the screen, however tall the element
 *   is (a percentage threshold can never be met by very tall elements).
 * - Falls back to "visible" if IntersectionObserver isn't available, so
 *   content can never stay hidden.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
