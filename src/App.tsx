import { useState } from 'react'

import './App.css'

// todo infer currentTab type from allTabs
const Tabs = ({allTabs, currentTab}: {allTabs: string[], currentTab: string}) => {
  const [activeTab, setShowActive] = useState(currentTab)
  const tabs = new Map<string, boolean>()
  allTabs.map((tab) => tabs.set(tab, false))
// ToDos
// accept Multiple ReactNode as props
// accept ReactNode instead of h2
return (
    <>
    {allTabs.map((tab) => (
      <button onClick={() => setShowActive(tab)}>{tab}</button>
    ))}
    <ul role='tablist'>
    <li role='tabpanel' aria-hidden={!tabs.get(activeTab)}>
      <h2>{activeTab}</h2>
    </li>
</ul>
</>
  )
}

function App() {
  return (
    <div className="App">
      <Tabs allTabs={['test1', 'test2', 'test3']} currentTab='test1'  />
    </div>
  )
}

export default App
