import { useRef } from "react";

const Theme = ({ darkTheme, setDarkTheme }) => {
  console.log(darkTheme);

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <label class="switch">
      <input
        type="checkbox"
        onChange={handleThemeChange}
        defaultChecked={darkTheme}
      />
      <span class="slider round"></span>
    </label>
  );
};

export default Theme;
