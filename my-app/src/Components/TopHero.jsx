import React, { useState, useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import SearchBar from "./SearchBar";

const TopHero = () => {
  const [currImage, setcurrImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrImage((prevIndex) => (prevIndex + 1) % img.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" justify-center items-center h-full">
      <div className="w-full h-screen max-w-full rounded-lg overflow-hidden shadow-lg relative">
        <div className="relative w-full h-full">
          {img.map((imageUrl, i) => (
            <img
              key={i}
              src={imageUrl}
              alt={`Slide ${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === currImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="className=absolute top-1/4 w-full flex justify-center">
      <SearchBar/>
      </div>
    </div>
  );
};

const img = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603517432006-7127536be848?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1685305380695-90e58a33d4e9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export default TopHero;
