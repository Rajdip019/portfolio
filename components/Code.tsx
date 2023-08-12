import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Code = ({ value }: any, readerMode: number) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }, [isCopied])

  return (
    <pre className={`${readerMode === 1 ? 'bg-[#282C34]' : 'bg-gray-800'} p-3 rounded-lg`}>
      <div className="flex justify-between">
        <p className=" text-xl font-semibold">Code</p>
        <CopyToClipboard text={value.rich_text[0].plain_text}><button onClick={() => setIsCopied(true)} className=" bg-gray-950 px-3 rounded-md">{isCopied ? "Copied" : "Copy"}</button></CopyToClipboard>
      </div>
      <SyntaxHighlighter language={value.language} style={oneDark} >
        {value.rich_text[0].plain_text}
      </SyntaxHighlighter>
    </pre>
  )
}

export default Code