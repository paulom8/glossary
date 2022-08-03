import { FunctionComponent, useState } from 'react'

export interface GlossaryItem {
  term?: string, definition?: string
}

interface Form {
  onSubmit: (glossaryItem: GlossaryItem) => void
}

const Form: FunctionComponent<Form> = ({ onSubmit }) => {
  const [glossaryItem, setGlossaryItem] = useState<GlossaryItem>({ term: '', definition: '' })

  const handleFormSubmit = () => {
    // makes request to api to save a new item
    onSubmit(glossaryItem)
  }

  return (
    <>
      <label htmlFor="term">Term</label>
      <input id="term" type="text" onChange={({ currentTarget: { value } }) => setGlossaryItem({ ...glossaryItem, term: value})}/>
      <label htmlFor="definition">Definition</label>
      <input id="definition" type="text" onChange={({ currentTarget: { value } }) => setGlossaryItem({ ...glossaryItem, definition: value })}/>
      <button onClick={handleFormSubmit}>Submit</button>

      <br/>
      {glossaryItem ? glossaryItem.term : null}
      {glossaryItem ? glossaryItem.definition : null}

    </>
  )
}

export default Form
