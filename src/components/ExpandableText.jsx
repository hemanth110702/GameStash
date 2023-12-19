import { useState } from "react";

const ExpandableText = ({ description }) => {
  const [expandableText, setExpandableText] = useState(false);
  if (description) {
    const limit = 300;
    const summary =
      expandableText === false
        ? description.slice(0, 300) + "..."
        : description;

    if (description.length <= 300) return <div>{description}</div>;

    return (
      <p>
        {summary}
        <button onClick={() => setExpandableText(!expandableText)}>
          {expandableText ? "Show Less" : "Read More"}
        </button>
      </p>
    );
  }
};

export default ExpandableText;
