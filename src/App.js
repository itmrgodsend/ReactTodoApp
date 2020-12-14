import React from "react";
import Todo from "./Components/Todo";


const App = (props) => {

    return (
    <div className='wrapper'>
      <Todo store={props.store}/>

    </div>
    )
}

export default App;