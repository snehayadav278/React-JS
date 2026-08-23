import Card from './components/Card'
import Navbar from './components/Navbar';
import navbar from './components/Navbar'

const App = () => {
  // return(
  //  <div>
  //   <div className="card">
  //     <h1>Sneha Yadav</h1>
  //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sit, iste harum iure corporis nobis et veniam laborum vero tenetur quo mollitia deserunt.</p>
  //   </div>
  //   {Card()}
  //  </div>
  // )


  // const user = 'Sneha';
  // const age = 21;
  // return(
  //   <div>
  //     <h1>Hello , Guys I am {user}</h1>
  //     <h2>I am {age} years old !</h2>
  //   </div>
  // )


  return(
    <div>
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App;