import React, { useState } from "react";


const App = () => {

  const [initial, final] = useState("");
  const [items, setItems] = useState([]);


  const item = (event) => {
    final(event.target.value);
    
  }

  const listOfitems = () => {
    setItems((oldItems) => {
      return [...oldItems, initial];
    });
    final("");
  };

  const deleteItems = (id) => {
    console.log("Deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrayElem,index) => {
        return index !== id;
      })
    })
  };


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add things to add" onChange={item} value={ initial } />
          <button onClick={listOfitems} value={initial} > + </button>
          
          <ol>
            
            { items.map((itemval,index) => {
                
              return (
                <>
                  <div className="todo_style">
                    <i className=" fa fa-times" aria-hidden="true"
                      onClick={() => {
                      deleteItems(index);
                      }}
                      key={index}
                      id={index} />
                    <li> {itemval} </li>
                  </div>
                </>
              );

            })
            }

          </ol>


        </div>
      </div>
    </>
  );
}

export default App;
