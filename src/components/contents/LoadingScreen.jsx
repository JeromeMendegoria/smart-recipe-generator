import { useEffect, useState } from "react";
import loading from "../../assets/loading.png"

const LoadingText = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.length < 3 ? prev + "." : ""
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="w-[50%] m-auto mt-[5%]">
            <img src={loading} alt="loading character" className="w-full"/>
        </div>
      <p className="text-lg font-semibold text-gray-700 animate-pulse">
        Searching for possible recipes{dots}
      </p>
    </div>
  );
};

export default LoadingText;
