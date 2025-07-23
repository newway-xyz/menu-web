import './App.css'
import { DraggableDiv } from './components/DraggableDiv'

function App() {
  return (
    <>
      <div className="fixed inset-0 w-screen h-screen">
        <img
          src="https://media.discordapp.net/attachments/1189617558257664110/1358894330999210164/image.png?ex=68813f77&is=687fedf7&hm=01cb7a89053590beec28385637b03deef85a1c1e36ebb3c94fe3a662bf3af684&=&format=webp&quality=lossless&width=1522&height=856"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>
      <DraggableDiv />
    </>
  )
}

export default App
