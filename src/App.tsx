import { useState } from 'react'
import './App.css'
import Container from './components/shared/Container'
import Tab1Content from './components/shared/Tab1Content'
import TabContent from './components/shared/TabContent'
import TabTitle from './components/shared/TabTitle'

function App() {

  const [selectedTabContent, setSelectedTabContent] = useState(<Tab1Content/>)
  const [selectedTabIndex, setSelectedTabIndex] = useState(1)

  const tabsText = [
    {
      text:'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов', 
      content: Tab1Content
    },
    {
      text:'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов', 
      content: Tab1Content
    },
    {
      text:'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов', 
      content: Tab1Content
    },
  ]

  return (
    <Container>
      <div className="flex flex-col gap-[30px]">
        {tabsText.map((tab, index) => (
          <div className="hover:text-white hover:bg-[#0078EE] pl-[20px] py-[25px]" onClick={() => {
            setSelectedTabContent(<tab.content/>)
            setSelectedTabIndex(index+1)
          }}>
            <TabTitle titleIndex={index+1} key={index}>{tab.text}</TabTitle>
          </div>
          
        ))}
      </div>
      <TabContent titleIndex={selectedTabIndex} children={selectedTabContent}/>
    </Container>
  )
}

export default App
