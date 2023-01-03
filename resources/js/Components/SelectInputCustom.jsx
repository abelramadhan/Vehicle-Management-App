import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInputCustom(
    { type = 'select', name, id, options, className, autoComplete, required, isFocused, handleChange, valueName, optionName },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    
    function getOptions() {
        return options.map((item) => {
            return <option value={item[valueName]} key={item.id}>
                {
                    optionName.map((option)=> {
                        return `${item[option]} `
                    })   
                }
            </option>
        })
    }

    return (
        <div className="flex flex-col items-start">

            <select 
                className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +className}
                name={name}
                id={id}
                onChange={(e) => handleChange(e)}>
                <option value="" key="0"></option>
                {getOptions()}
            
            </select>
        </div>
    );
});
