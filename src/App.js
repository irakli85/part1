import { useState } from "react";

const Heading = ({text}) => <h1>{text}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Paragraph = ({text, count, text2}) => <p>{text} {count}{text2}</p>

const App = () => { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad( bad + 1)
  }

  let all = good + neutral + bad
  let average = (good-bad) / all
  let positive = (good/all)*100
  
    return (
      <div>
        <Heading text='give feedback'/>
        <Button onClick={handleClickGood} text = 'good'/>
        <Button onClick={handleClickNeutral} text = 'neutral'/>
        <Button onClick={handleClickBad} text = 'bad'/>
        <Heading text= 'statistics'/>
        <Paragraph text='good' count = {good}/>
        <Paragraph text='neutral' count = {neutral}/>
        <Paragraph text='bad' count = {bad}/>
        <Paragraph text='all' count = {all}/>
        <Paragraph text='average' count = {isNaN(average) ? '0' : average}/>
        <Paragraph text='positive' count ={isNaN(positive) ? '0' : positive} text2=' %'/>             
      </div>
    )
  }


export default App;
