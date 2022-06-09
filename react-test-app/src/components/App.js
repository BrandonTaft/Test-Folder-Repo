import MyButton from "./MyButton"
import Container from "./container"

function App(){
    return(
        <div className="App">
        App
        <MyButton />
        <Container>
            <h3>I am a container</h3>
        </Container>
      </div>
    )   
}

export default App