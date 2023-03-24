
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Contact } from "./pages/Contact"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import "./App.css"
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App