import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import MovieList from "./page/MovieList"
import Header from "./components/Header"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="movies/:type" element={<MovieList />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
