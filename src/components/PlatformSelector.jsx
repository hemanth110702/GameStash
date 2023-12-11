import usePlatform from "../hooks/usePlatform";


const PlatformSelector = ({setChanged,selectedPlatform,setSelectedPlatform}) => {
  const {platforms, error} = usePlatform();

  const handlePlatform = (e) => {
    const value = e.target.value;
    const fetchPlatform = platforms.filter((platform)=> platform.name === value);
    setSelectedPlatform(...fetchPlatform);
  }

  if(error) return null;
  return (
    <select name="languages" id="lang" onChange={handlePlatform}>
      <option value="Platform" >
        {selectedPlatform?.name || 'Platform'}
      </option>
      {platforms.map((platform, index)=> <option key={index} value={platform.name}>{platform.name}</option>)}
    </select> 
  );
}

export default PlatformSelector