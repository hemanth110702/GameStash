import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const {platforms, error} = usePlatform();
  console.log("this is the platform", platforms);
  if(error) return null;
  return (
    <select name="languages" id="lang">
      <option value="" disabled selected>
        Platform
      </option>
      {platforms.map((platform)=> <option value={platform.name}>{platform.name}</option>)}
    </select> 
  );
}

export default PlatformSelector