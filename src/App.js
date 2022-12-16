const course = 'Half Stack application development'

const part1 = {
  name: 'Fundamentals of React: ',
  exercises: 10
} 

const part2 = {
  name: 'Using props to pass data: ',
  exercises: 7
}
const part3 = {
  name: 'State of a component: ',
  exercises: 14
}

 const Header = ({course}) => {
  return(
    <>
      <h1>{course}</h1>
    </>
  )
 }

 const Part = ({arr}) =>{
  return(
    <>
     <p>{arr.name}{arr.exercises}</p>
    </>
  )
 }

 const Content = () => {
  return(
    <>
      <Part arr={part1} />
      <Part arr={part2} />
      <Part arr={part3} />
    </>
  )
  }

 const Total = () =>{
  return(
    
    <>
      <p>Numbers of exercises: {part1.exercises+part2.exercises+part3.exercises}</p>
    </>
  )
 }


const App = () => {  
  return (
    <>
      <Header course={course}/>
      <Content/>
      <Total/>
    </>
  )
}

export default App;
