import sad from "../assets/sad.png";
import neutral from "../assets/neutral.png";
import meh from "../assets/meh.png";
import target from "../assets/target.png";
import thumbsUp from "../assets/thumbsUp.png";

const Emoji = ({ ratingTop }) => {
  const emojis = {
    1: { value: sad, alt: "not recommended" },
    2: { value: neutral, alt: "Neutral" },
    3: { value: meh, alt: "meh" },
    4: { value: thumbsUp, alt: "recommended" },
    5: { value: target, alt: "exceptional" },
  };

  if (ratingTop == 0 || ratingTop > 5) return;

  return (
    <img
      className="emoji"
      src={emojis[ratingTop]?.value}
      alt={emojis[ratingTop]?.alt}
    />
  );
};

export default Emoji;
