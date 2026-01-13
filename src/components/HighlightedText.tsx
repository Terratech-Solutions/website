type HighlightedTextProps = {
  lines: string[];
  highlight: string[] | string;
  highlightColor: string;
};

const HighlightedText = ({ lines, highlight, highlightColor }: HighlightedTextProps) => {
  const highlights = Array.isArray(highlight) ? highlight : [highlight];

  const highlightWords = (line: string, lineIndex: number) => {
    const parts = line.split(/(\s+)/);

    return parts.map((part, partIndex) => {
      const shouldHighlight = highlights.find((h) => part.includes(h));

      if (shouldHighlight && part.trim()) {
        return (
          <span key={`${lineIndex}-${partIndex}`} className={highlightColor}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {highlightWords(line, i)}
          {i !== lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

export default HighlightedText;
