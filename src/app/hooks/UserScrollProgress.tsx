"use client";
import React, { useEffect, useState } from "react";

const UserScrollProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progressRatio = currentProgress / scrollHeight;
        setCompletion(Number((progressRatio * 100).toFixed(2)));
      }
    };
    //event
    window.addEventListener("scroll", updateScrollCompletion);

    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);
  return completion;
};

export default UserScrollProgress;
