import Home from "./Component/Home"
import About from "./Component/About"
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return <>
    {/* <h1>hello</h1> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App





























































































