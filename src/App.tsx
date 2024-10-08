import './App.css'
import Title from './components/UI/Title'
import Container from './components/shared/Container'
import TabTitle from './components/shared/TabTitle'

function App() {

  const tabsText = [
    'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов',
    'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов',
    'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов',
  ]


  return (
    <Container>
      <div className="flex flex-col gap-[20px]">
        {tabsText.map((tab, index) => (
          <TabTitle titleIndex={index} key={index}>{tab}</TabTitle>
        ))}
      </div>
      
      
    </Container>
  )
}

export default App
