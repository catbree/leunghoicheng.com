import ReactMarkdown from "react-markdown";

export function MainContentSection({ content }) {
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
