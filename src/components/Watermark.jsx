import { useLocation } from "react-router-dom";

export default function Watermark() {
  const location = useLocation();

  const getWatermarkText = (path) => {
    switch (path) {
      case "/":
        return "Mansoor";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      case "/about":
        return "About";
      default:
        return "Portfolio";
    }
  };

  const text = getWatermarkText(location.pathname);

  return (
    <div className="fixed bottom-2 left-4 z-0 flex justify-center items-center pointer-events-none">
      <h1
        className="
    text-[15vw] md:text-[10vw] font-extrabold uppercase tracking-widest select-none
    text-transparent bg-clip-text 
    bg-gradient-to-r from-gray-700/20 to-gray-400/10
    dark:from-white/50 dark:to-white/10
  "
      >
        {text}
      </h1>
    </div>
  );
}
