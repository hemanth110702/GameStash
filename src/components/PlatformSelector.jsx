import usePlatform from "../hooks/usePlatform";


const PlatformSelector = ({setChanged,selectedPlatform,setSelectedPlatform}) => {
  const platforms = usePlatform();

  const handlePlatform = (e) => {
    const value = e.target.value;
    const fetchPlatform = platforms.filter((platform)=> platform.name === value);
    setSelectedPlatform(...fetchPlatform);
  }

  return (
    <select className="platform-selector" name="platform" id="pf" onChange={handlePlatform}>
      <option value="Platform" >
        {selectedPlatform?.name || 'Platform'}
      </option>
      {platforms.map((platform, index)=> <option key={index} value={platform.name}>{platform.name}</option>)}
    </select> 
  );
}

export default PlatformSelector