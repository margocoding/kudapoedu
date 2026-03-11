export default function ParagraphedText({ children }: { children: string }) {
  const cleanText = children.replace(/\u00A0/g, " ");
  const paragraphs = cleanText.split(/\n\s*\n|\r\s*\r/).filter((p) => p.trim());

  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="whitespace-normal wrap-break-word leading-relaxed"
        >
          {p.trim()}
        </p>
      ))}
    </div>
  );
}
