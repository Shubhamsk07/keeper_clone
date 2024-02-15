import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

function CreateArea(props) {
  const [note,setNote] =useState({
    title:"",
    content:""
  })
  function handleChange(event) {
    const newValue = event.target.value;
    const inputName =event.target.name;
    setNote(prevValue =>{
      if(inputName ==="title") {
        return {
          title: newValue,
          content:prevValue.content
        }
      }else if(inputName ==="content") {
       return{
        title: prevValue.title,
        content:newValue
      }
      }
    })
  }
  function submitNote(event){
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title:"",
    content:""
    })


  }
  
  return (
    <div>
      <form>  
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
     </form>
    </div>
  );
}

export default CreateArea;
