import Home from './pages/Home'
import { useSelector } from 'react-redux'
import IngredientsUI from './pages/IngredientsUI'
import ActiveDishesUI from './pages/ActiveDIshesUI'

function App() {
  const activeUI = useSelector((state) => state.activeUI)

  let content;
  switch(activeUI) {
    case "character":
      content = <Home />
      break
    case "ingredients":
      content = <IngredientsUI />
      break
    case "activeDishesUI":
      content = <ActiveDishesUI />
  }

  return (
      <main className='bg-[#fec5f6] h-screen overflow-hidden'>
        {content}
      </main>
  )
}

export default App
