import { useState } from 'react'

const StatisticLine  = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{props.value}</td>
  </tr>
)

const Stadistics = (props) => (
  <tr>
    <td>{props.name}</td>
    <td>{(props.value/props.total) * 100} {'%'}</td>
  </tr>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setToGood = newValue => {
    console.log('good count now', newValue)
    setGood(newValue)
    setToAll()
  }

  const setToNeutral = newValue => {
    console.log('neutral count now', newValue)
    setNeutral(newValue)
    setToAll()
  }

  const setToBad = newValue => {
    console.log('bad count now', newValue)
    setBad(newValue)
    setToAll()
  }

  const setToAll = () => {
    console.log('total count', all+1)
    setAll(all+1)
  }

  if(all === 0){
    return (
      <div>
        <h1> give feedback </h1>
  
        <Button handleClick={() => setToGood(good + 1)} text='good'></Button>
        <Button handleClick={() => setToNeutral(neutral + 1)} text='neutral'></Button>
        <Button handleClick={() => setToBad(bad + 1)} text='bad'></Button>
  
        <h1> stadistics </h1>
        <div>
          No feedback given
        </div>
      </div>
    )
  }else{
    return (
      <div>
        <h1> give feedback </h1>
  
        <Button handleClick={() => setToGood(good + 1)} text='good'></Button>
        <Button handleClick={() => setToNeutral(neutral + 1)} text='neutral'></Button>
        <Button handleClick={() => setToBad(bad + 1)} text='bad'></Button>
  
        <h1> stadistics </h1>
        <div>
          <table>
            <tbody>
              <StatisticLine  name='good' value={good}></StatisticLine >
              <StatisticLine  name='neutral' value={neutral}></StatisticLine >
              <StatisticLine  name='bad' value={bad}></StatisticLine >
              <StatisticLine  name='all' value={all}></StatisticLine >
              <StatisticLine  name='average' value={((good*1)+(bad*-1))/all}></StatisticLine >
              <Stadistics name='stadistics' value={good} total={all}></Stadistics>
            </tbody>
          </table>
        </div> 
      </div>
    )
  }
  
}

export default App