import type { ReactNode } from "react";

function renderInlineFormatting(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderBlock(block: string, index: number): ReactNode {
  if (block === "---") return <hr key={index} />;

  if (block.startsWith("## ")) {
    return <h3 key={index}>{renderInlineFormatting(block.slice(3))}</h3>;
  }

  if (block.startsWith("> ")) {
    return (
      <blockquote key={index}>
        <p>{renderInlineFormatting(block.slice(2))}</p>
      </blockquote>
    );
  }

  if (block.startsWith("- ")) {
    const items = block.split("\n").filter((l) => l.trim().startsWith("- "));
    return (
      <ul key={index}>
        {items.map((item, j) => (
          <li key={j}>{renderInlineFormatting(item.slice(2))}</li>
        ))}
      </ul>
    );
  }

  return <p key={index}>{renderInlineFormatting(block)}</p>;
}

interface ArticleBodyProps {
  content: string[];
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="article-prose">
      {content.map((block, i) => renderBlock(block, i))}
    </div>
  );
}
