import {useState} from "react";
import Item from "./Item";
import {v4 as uuidv4} from 'uuid';

export default function Form(){

    /**
     * UseState about data array
     * */
    const[dataArray, setDataArray] = useState([
        {txt: "Laver le linge", id: uuidv4()},
        {txt: "Faire la vaisselle", id: uuidv4()},
        {txt: "Nettoyer la maison", id: uuidv4()}
    ]);

    /**
     * UseState about input
     * */
    const [stateInput, setStateInput] = useState();

    /**
     * Modify the state of the input
     * */
    const linkedInput = e => {
        setStateInput(e);
    }

    /**
     * Add an item
     * */
    const addElement = e => {
        //prevent to-do list update
        e.preventDefault();

        //create a new array
        const newArray = [...dataArray];

        //create a new task
        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        //add on array the new task
        newArray.push(newTodo);

        //update data array
        setDataArray(newArray);

        //initialize input value to empty
        setStateInput("");
    }

    /**
     * Delete an item
     * */
    const deleteElement = id => {
        const filteredState = dataArray.filter(item =>{
            return item.id !== id;
        })
        setDataArray(filteredState);
    }

    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addElement(e)} className="form-label mt-5">
                <input
                    type="text" className="form-control"
                    id="todo"
                    value={stateInput}
                    onInput={e => linkedInput(e.target.value)}
                />
                <button className="mt-4 mb-3 btn btn-success col-12">Ajouter</button>
            </form>

            <ul className="list-group">
                {dataArray.map((item, index) => {
                    return(
                        <Item
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        deleteFunction={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

