"use cilent";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";


const ThemeChange = () => {
  const { theme, setTheme } = useTheme();
  return (


      <button className="btn btn-circle swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* sun icon */}
        <SunIcon
          className="swap-on"
          onClick={() => setTheme("dark")}
        />

        {/* moon icon */}
        <MoonIcon
          className="swap-off"
          onClick={() => setTheme("light")}
        />
      </button>

  );
};

export default ThemeChange;
