import React from "react";
import './styles.css'

function TextInput({searchValue, handleChange}) {
  return (
    <input className="text-input" onChange={handleChange} type="search" value={searchValue} placeholder="Pesquisar posts"/>
  );
}

export default TextInput;
