"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + "px";
        cursorRef.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.08;
      followerY += (mouseY - followerY) * 0.08;
      if (followerRef.current) {
        followerRef.current.style.left = followerX + "px";
        followerRef.current.style.top = followerY + "px";
      }
      requestAnimationFrame(animate);
    };

    const addHover = () => {
      cursorRef.current?.classList.add("hover");
      followerRef.current?.classList.add("hover");
    };
    const removeHover = () => {
      cursorRef.current?.classList.remove("hover");
      followerRef.current?.classList.remove("hover");
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

    const hoverables = document.querySelectorAll("a, button, [data-hover]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
