import { useState } from "react";

const Heading = ({text}) => <h1>{text}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({text, value, percentage}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}{percentage}</td>
    </tr>
  )
}



const App = () => { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState(0)

  const handleClickGood = () => {
    setAll(allFeedback + 1)
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setAll(allFeedback + 1)
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setAll(allFeedback + 1)
    setBad( bad + 1)
  }

  let all = good + neutral + bad
  let average = ((good-bad) / all).toFixed(1)
  let positive = ((good/all) * 100).toFixed(1)

  const Statistics = () => {
    if(allFeedback === 0){
      return(
        <p>No feedback given</p>
      )
    }
    return(
      <table>        
        <StatisticLine text='good' value = {good}/>
        <StatisticLine text='neutral' value = {neutral}/>
        <StatisticLine text='bad' value = {bad}/>
        <StatisticLine text='all' value = {all}/>
        <StatisticLine text='average' value = {isNaN(average) ? '0' : average}/>
        <StatisticLine text='positive' value ={isNaN(positive) ? '0' : positive} percentage=' %'/>
      </table>  
    )
  }
  
    return (
      <div>
        <Heading text='give feedback'/>
        <Button onClick={handleClickGood} text = 'good'/>
        <Button onClick={handleClickNeutral} text = 'neutral'/>
        <Button onClick={handleClickBad} text = 'bad'/>
        <Heading text= 'statistics'/>
        <Statistics/>          
      </div>
    )
  }


export default App;
