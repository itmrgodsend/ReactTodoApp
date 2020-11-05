import React from "react";
import AddTodo from "./Components/AddTodo";


const App = (props) => {

    return (
    <div className='wrapper'>
      <AddTodo store={props.store}/>

    </div>
    )
}

export default App;