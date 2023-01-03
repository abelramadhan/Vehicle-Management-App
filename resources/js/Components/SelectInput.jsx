import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput(
    { type = 'select', name, id, options, className, autoComplete, required, isFocused, handleChange },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    
    function getOptions() {
        options.unshift('')
        return options.map((item) => {
            return <option value={item} key={item}>{item}</option>
        })
    }

    return (
        <div className="flex flex-col items-start">

            <select 
                className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +className}
                name={name}
                id={id}
                onChange={(e) => handleChange(e)}>
                {getOptions()}
            
            </select>
        </div>
    );
});
