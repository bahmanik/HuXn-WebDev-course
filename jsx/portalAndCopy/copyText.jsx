import React, { useState } from 'react'
import PopUp from './popUp'

const CopyInput = () => {
  const [value, setValue] = useState("")
  const [copied, setCopied] = useState("")

  const onCopy = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopied(value)
        setTimeout(() => {
          setCopied("")
        }, 2000);
      })
  }

  return (
    <>
      <div>CopyInput</div>

      <input
        type='text'
        placeholder='text to copy'
        value={value}
        onChange={(e) => { setValue(e.target.value) }} />

      <button onClick={onCopy}>copy</button>

      {copied && <PopUp text={copied} />}

    </>
  )
}

export default CopyInput
