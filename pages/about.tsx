import Form, { GlossaryItem } from '../components/Form'
import Glossary from './glossary'

function About() {
  const handleFormSubmit = (glossaryItem: GlossaryItem) => {
    // makes request to api to save a new item
    console.log(glossaryItem)

  }

  return (
    <>
     <Form onSubmit={handleFormSubmit} />
      <Glossary />
    </>

  )
}

export default About
