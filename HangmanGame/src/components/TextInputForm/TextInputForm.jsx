import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"
function TextInputForm() {

    function handleFormSubmit(event){
        event.preventDefault();
    }

    function handleTextInputChange(event){
        console.log(event.target.value);
    } 
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label="Enter a word or a phrase"
          placeholder="Enter a word or a phrase"
          onChangeHandler = {handleTextInputChange}
        />
      </div>
      <div>
        <Button
        styleType = "warning"
        text= "Show/Hide"
        />
      </div>
      <div>
        <Button
        type = "submit"
        styleType="primary"
        text="Submit"
        />
      </div>
    </form>
  );
}
export default TextInputForm;
