type HighlightedTextProps = {
  lines: string[];
  highlight: string[] | string;
  highlightColor: string;
  lineColors?: string[];
};

const HighlightedText = ({ lines, highlight, highlightColor, lineColors }: HighlightedTextProps) => {
  const highlights = Array.isArray(highlight) ? highlight : [highlight];

  const highlightWords = (line: string, lineIndex: number) => {
    const lineColor = lineColors?.[lineIndex];
    if (lineColor) {
      return <span className={lineColor}>{line}</span>;
    }

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
