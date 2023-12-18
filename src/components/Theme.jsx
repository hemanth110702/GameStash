import { useRef } from "react";

const Theme = ({ darkTheme, setDarkTheme }) => {
  console.log(darkTheme);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme?"themes":"light-themes"}>
      <label class="switch">
        <input
          type="checkbox"
          onChange={handleThemeChange}
          defaultChecked={darkTheme}
        />
        <span class="slider round"></span>
      </label>
        Dark Theme
    </div>
  );
};

export default Theme;
