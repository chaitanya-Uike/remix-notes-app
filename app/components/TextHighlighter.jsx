function TextHighlighter({ sourceText, highlightedText }) {
  if (!highlightedText) return <span>{sourceText}</span>;

  let indexes = [];
  // the highlightedText regex may not be safe so try it first

  try {
    indexes = [...sourceText.matchAll(new RegExp(highlightedText, "gi"))].map(
      (a) => a.index
    );
  } catch (error) {
    return <span>{sourceText}</span>;
  }

  const highlightLength = highlightedText.length;
  let pointer = 0;

  return (
    <span>
      {indexes.map((index, idx) => {
        let subString = (
          <span key={idx}>
            {sourceText.slice(pointer, index)}
            <span
              style={{
                backgroundColor: "#F0E6FF99",
                padding: "5px 1px",
              }}
            >
              {sourceText.slice(index, index + highlightLength)}
            </span>
          </span>
        );
        pointer = index + highlightLength;
        return subString;
      })}
      <span>{sourceText.slice(pointer, sourceText.length)}</span>
    </span>
  );
}

export default TextHighlighter;
