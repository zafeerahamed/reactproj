import './App.css'
import Card from './components/Cards'

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-md mb-4">Tailwind Test</h1>
      <Card username="chaiaurreact" btnText="click me"/>
      <Card username="zafeer" />
    </>
  )
}

export default App
