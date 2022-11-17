import {Bio} from './componets/Bio'
import {Search} from './componets/Search'

import './App.css'
// colocar icone do github no lado do titulo 
function App() {
  return (
    <div className="App">
      <h1>Meu gitSearch</h1> 
      <Bio/>
      <Search/>
    </div>
  )
}

export default App
