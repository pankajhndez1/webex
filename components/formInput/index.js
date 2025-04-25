
import React from 'react';

const FormInput = ({ 
  id, 
  label, 
  type = "text", 
  placeholder, 
  register, 
  errors, 
  validation = {}, 
  isTextarea = false,
  rows = 3,
  ...props 
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500 
                    ${errors[id] ? 'border-red-500' : ''}`}
          placeholder={placeholder}
          {...register(id, validation)}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500 
                    ${errors[id] ? 'border-red-500' : ''}`}
          placeholder={placeholder}
          {...register(id, validation)}
          {...props}
        />
      )}
      
      {errors[id] && (
        <p className="mt-1 text-sm text-red-600">{errors[id].message}</p>
      )}
    </div>
  );
};

export default FormInput;