import React, { useEffect, useState } from "react";

const Filter = function ({ params, inputStatus }) {
  const [inputValue, setInputValue] = useState();
  

  // если кнопку нажали переносим значение инпутов в состояние
  const changeHandler = (e) => {
    
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if ( inputValue ) {
      const result = { name: params.name , value: inputValue, type: params.type };
      inputStatus(result);
    }
    else if(inputValue === ''){
      inputStatus({name: params.name, value: ''})
    }
  }, [inputValue]);

  return (
    <div className="mb-3 m-2">
      <label className="form-label fs-6">
        {params.description}
        <input
          type={params.type}
          id={params.name}
          onChange={changeHandler}
          className="form-control"
          min={0}
        ></input>
      </label>
    </div>
  );
};

export default Filter;