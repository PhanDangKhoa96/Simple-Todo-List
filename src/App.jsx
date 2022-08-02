import Container from "./components/Container/Container"
import './App.css'
import ThemeContextProvider from "./context/ThemeContext"
import TaskContextProvider from "./context/TaskContext"

function App() {

  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <main className="main">
          <Container />
        </main>
      </TaskContextProvider>
    </ThemeContextProvider>

  )
}

export default App
