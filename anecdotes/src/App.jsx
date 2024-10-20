import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display  = (props) => (<div>has {props.votes} votes</div>)

const Voted  = (props) => {
  const anecdotes = [...props.anecdotes]
  const points = [...props.points]
  const i = Math.max(...points);
  const a = points.indexOf(i)

  console.log('points:', points)
  console.log('I:', i, ' A:', a)

  if(a === -1){
    return (
      <div>
        no voted anecdotes
      </div>
    )
  }else{
    return (
      <div>
        <p>{anecdotes[a]}</p>
        has {points[a]} votes
      </div>
    )
  }
  
}


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
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const voteSelected = () => {
    const copy = [...points]
    console.log('votes ', copy[selected] + 1)
    copy[selected] += 1
    setPoints(copy)
  }

  const changeSelected = () => {
    let newA = Math.floor(Math.random() * anecdotes.length)
    while(newA === selected){
      newA = Math.floor(Math.random() * anecdotes.length)
    }
    console.log('new anecdote index', newA)
    setSelected(newA);
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <Display votes={points[selected]}></Display>
      <Button handleClick={()=>voteSelected()} text='vote'></Button>
      <Button handleClick={()=>changeSelected()} text='next anecdote'></Button>
      <h1>Anecdote with most votes</h1>
      <Voted points={points} anecdotes={anecdotes}></Voted>
    </div>
  )
}

export default App