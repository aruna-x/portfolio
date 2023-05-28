function Input({id, type, placeholder, rows, dataType, formData, setFormData, inputType="input"}) {
  function handleChange(e) {
      setFormData({...formData, [dataType]: e.target.value});
  }

  return (
      <>
          <label hidden>{placeholder}</label>
          { inputType === "input" ? 
            <input
              id={id}
              type={type}
              placeholder={placeholder} 
              className="textarea"
              value={formData[dataType]} 
              onChange={handleChange} 
              required
            /> 
            : <textarea
              id={id}
              type={type}
              placeholder={placeholder} 
              className="textarea"
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