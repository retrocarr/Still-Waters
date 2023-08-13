import { loremIpsum } from "lorem-ipsum";
/** 
 * npm i lorem-ipsum
 * 
 * generate lorem ipsum
 */
function Paragraph({ min, max }) {
  const randRange = Math.floor(
    Math.random() *
      (min && max) ?
      max - min + 1 + min
      :
      (25 - 10 + 1) + 10
  )
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8, min: 4
    }, wordsPerSentence: {
      max: 16, min: 4
    }
  })
  const randText = lorem.generateWords(randRange)
  return <>{randText}</>
}