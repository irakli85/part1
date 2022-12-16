const App = () => {  
const course = 'Half Stack application development'

const parts = [
  {
    name: 'Fundamentals of React: ',
    exercises: 10
  },

  {
    name: 'Using props to pass data: ',
    exercises: 7
  },

  {
    name: 'State of a component: ',
    exercises: 14
  }
]

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
      <Part arr={parts[0]} />
      <Part arr={parts[1]} />
      <Part arr={parts[2]} />
    </>
  )
  }

 const Total = () =>{
  return(
    
    <>
      <p>Numbers of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  )
 }



  return (
    <>
      <Header course={course}/>
      <Content/>
      <Total/>
    </>
  )
}

export default App;
