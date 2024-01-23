// components/TextReveal.js
"use client"
import { useEffect, useState } from "react";

const TextReveal = ({ text }: { text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`overflow-hidden ${
        isVisible ? "h-auto" : "h-0"
      } transition-height duration-500 ease-in-out`}
    >
      <p className="text-4xl font-bold text-center">{text}</p>
    </div>
  );
};

export default TextReveal;
