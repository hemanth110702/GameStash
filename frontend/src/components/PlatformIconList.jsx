import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="platform-list">
      {platforms!=null && platforms.map(({ platform }, index) => {
        const IconComponent = iconMap[platform?.slug];
        if (!IconComponent) {
          console.error(`No icon found for platform slug: ${platform?.slug}`);
          return null;
        }

        return <IconComponent key={index} size={13} />;
      })}
    </div>
  );
};

export default PlatformIconList;
