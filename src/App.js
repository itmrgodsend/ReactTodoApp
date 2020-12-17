import React from "react";
import TodoContainer from "./Components/TodoContainer";
import {Provider} from "react-redux";



const App = (props) => {

    return (
        <div className='wrapper'>


                {console.log(store)}


            <TodoContainer/>
        </div>
    )
}



export default App;