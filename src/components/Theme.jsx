import { useRef } from "react";

const Theme = ({ darkTheme, setDarkTheme }) => {
  console.log(darkTheme);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme?"themes":"light-themes"}>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleThemeChange}
          defaultChecked={darkTheme}
        />
        <span className="slider round"></span>
      </label>
        Dark Theme
    </div>
  );
};

export default Theme;
