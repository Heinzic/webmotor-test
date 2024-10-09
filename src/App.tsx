import { useState } from 'react'
import './App.css'
import Container from './components/shared/Container'
import Tab1Content from './components/shared/Tab1Content'
import TabContent from './components/shared/TabContent'
import TabTitle from './components/shared/TabTitle'
import Tab2Content from './components/shared/Tab2Content'
import useWindowDimensions from './components/hooks/useWindowDimension'

function App() {

  const {width} = useWindowDimensions()

  const [selectedTabContent, setSelectedTabContent] = useState(<Tab1Content/>)
  const [selectedTabIndex, setSelectedTabIndex] = useState(1)
  

  const tabsText = [
    {
      text:'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов', 
      content: Tab1Content
    },
    {
      text:'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов', 
      content: Tab2Content
    },
    {
      text:'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов', 
      content: Tab1Content
    },
  ]

  return (
    <Container>
      <div className={`flex flex-col gap-[30px] mx-[10px] text-[${width > 1023 ? '18px ' : '12px'}]`}>
        {tabsText.map((tab, index) => (
          <div className="hover:text-white hover:bg-[#0078EE] px-[20px] py-[25px] bg-[#F2F0F0] flex" onClick={() => {
            setSelectedTabContent(<tab.content/>)
            setSelectedTabIndex(index+1)
          }}>
            <TabTitle titleIndex={index+1} key={index}>{tab.text}</TabTitle>
          </div>
        ))}
      </div>
      <div className="mx-[10px] grow flex justify-center">
        <TabContent titleIndex={selectedTabIndex} children={selectedTabContent}/>
      </div>

      
    </Container>
  )
}

export default App
