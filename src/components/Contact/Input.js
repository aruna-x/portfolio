import styled from "styled-components";

function Input({id, type, placeholder, rows, dataType, formData, setFormData, inputType="input"}) {
  function handleChange(e) {
      setFormData({...formData, [dataType]: e.target.value});
  }

  return (
      <>
          <label hidden>{placeholder}</label>
          { inputType === "input" ? 
            <StyledInput
              id={id}
              type={type}
              placeholder={placeholder}
              value={formData[dataType]} 
              onChange={handleChange} 
              required
            /> 
            : <TextArea
              id={id}
              type={type}
              placeholder={placeholder}
              rows={rows}
              value={formData[dataType]} 
              onChange={handleChange} 
              required
            />
          }
      </>
  )
}

export default Input;

const TextArea = styled.textarea`
  max-width: 500px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.166);
  color: white;
  margin: 7px 0;
  font-family: monospace;
`;

const StyledInput = styled.input`
  max-width: 500px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.166);
  color: white;
  margin: 7px 0;
  font-family: monospace;
`;
