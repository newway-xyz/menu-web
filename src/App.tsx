import './App.css'
import { DraggableDiv } from './components/DraggableDiv'

function App() {
  return (
    <>
      <div className="fixed inset-0 w-screen h-screen">
        <img
          src="https://media.discordapp.net/attachments/1394709878697758740/1397376959692144720/image.png?ex=68818035&is=68802eb5&hm=9d6be3c4a96087c80346f16eb6fbea2b39e5b04e572e13c815b9e8a1722b09fb&=&format=webp&quality=lossless&width=1522&height=856"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>
      <DraggableDiv />
    </>
  )
}

export default App
