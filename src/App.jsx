import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "/Users/Raheem/react-route1-project/src/components/Header"
import Footer from "/Users/Raheem/react-route1-project/src/components/Footer"
import LandingPage from "/Users/Raheem/react-route1-project/src/pages/LandingPage"
import Gallery from "/Users/Raheem/react-route1-project/src/pages/Gallery"
import Projects from "/Users/Raheem/react-route1-project/src/pages/Projects"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
