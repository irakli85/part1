import { useState } from "react";
   

const App = () => { 

  const anecdotes = [
    'If it hurts, do it more often.',

    'Adding manpower to a late software project makes it later!',

    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',

    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',

    'Premature optimization is the root of all evil.',

    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',

    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',

    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const [allVotes, setAllVotes] = useState([])  
  

  const handleNext = () => {    
    let randNum = Math.floor(Math.random() * 10) 
    setSelected(randNum <= 7 ? randNum : 0)
    console.log(selected)
  } 

  const handleVote = () => {
    setVote(vote + 1)
    setAllVotes(allVotes.concat(vote))
    console.log(allVotes)
  }

    return (
      <div>
        <p>{anecdotes[selected]}</p>
        <p> has {vote} votes</p>
        <button onClick={handleVote}>votes</button>
        <button onClick={handleNext}>next anecdote</button>
      </div>
    )
  }


export default App;
