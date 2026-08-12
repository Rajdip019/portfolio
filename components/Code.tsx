import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  value: any;
  readerMode?: number;
}

const Code: React.FC<Props> = ({ value, readerMode }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const t = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(t);
    }
  }, [isCopied])

  const code = value.rich_text?.[0]?.plain_text ?? "";

  return (
    // A plain div, not <pre> — SyntaxHighlighter renders its own <pre>, and
    // nesting them made the block impossible to constrain.
    <div
      className={`${readerMode === 1 ? 'bg-[#282C34]' : 'bg-gray-800'} w-full max-w-full overflow-hidden rounded-lg`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
          {value.language ?? "code"}
        </p>
        <CopyToClipboard text={code}>
          <button
            onClick={() => setIsCopied(true)}
            className="shrink-0 rounded-md bg-gray-950 px-3 py-1 font-mono text-xs text-gray-300 transition-colors hover:text-white"
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      {/* The scroll container: long lines scroll here instead of widening the page */}
      <div className="w-full max-w-full overflow-x-auto">
        <SyntaxHighlighter
          language={value.language}
          style={oneDark}
          customStyle={{
            margin: 0,
            background: "transparent",
            fontSize: "13px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Code
