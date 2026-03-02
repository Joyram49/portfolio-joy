"use client";

import { useEffect, useState } from "react";

const TYPING_STRINGS = [
  "Full-Stack Developer",
  "React.js Engineer",
  "Next.js Architect",
  "MERN Stack Dev",
  "Learning python",
];

function TypeWriter() {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[currentStringIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1));
          if (currentText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentStringIndex((i) => (i + 1) % TYPING_STRINGS.length);
          }
        }
      },
      isDeleting ? 50 : 90,
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex]);

  return (
    <span className="gradient-text font-display font-bold">
      {currentText}
      <span className="blink text-accent">|</span>
    </span>
  );
}

export default TypeWriter;
