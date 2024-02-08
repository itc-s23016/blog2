import { useState, useRef } from 'react'
const Sample2 = () => {
  const inputRef = useRef('')
  const [values, setValues] = useState([])
  const handleClick = e => {
    const current = inputRef.current.value
    setValues(p => [...p, current])
  }

  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>click me </button>
      <ul>
        {values.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </>
  )
}
export default Sample2
