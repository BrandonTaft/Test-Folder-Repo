import MyButton from "./MyButton"
import Container from "./Container"
import {Parent} from "./Parent"

function App(){
    return(
        <div className="App">
        App
        <MyButton />
        <Container>
            <h3>I am a container</h3>
        </Container>
        <Parent />
      </div>
    )   
}

export default App