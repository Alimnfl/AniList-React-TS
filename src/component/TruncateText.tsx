import { useState } from 'react';

const TruncateText = ({ text, maxLength }: { text: string; maxLength: number }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };
  const truncateText = expanded ? text : text.slice(0, maxLength);
  const showEllipsis = !expanded && text.length > maxLength;
  return (
    <div>
      {truncateText}
      {showEllipsis && '...'}
      {!expanded && text.length > maxLength && (
        <div onClick={handleToggleExpand} className="font-semibold text-white underline bg-transparent border-none cursor-pointer ">
          Read More
        </div>
      )}
    </div>
  );
};

export default TruncateText;
