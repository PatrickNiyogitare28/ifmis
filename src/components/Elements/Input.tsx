import React from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  onChange?: (value: string) => void;
  fieldProps?: any;
  error?: string;
  isDirty?: boolean;
  isTextArea?: boolean; // New prop to indicate whether it should be a textarea
}

export default function Input({
  placeholder,
  type,
  onChange,
  fieldProps,
  error,
  isDirty,
  isTextArea, // Added isTextArea prop
}: InputProps) {
  const InputComponent = isTextArea ? 'textarea' : 'input'; // Determine the input component based on isTextArea prop

  return (
    <div>
      <InputComponent
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
        className={`border-[1px] ${
          isDirty && error ? 'border-danger' : 'border-gray-400'
        } p-4 rounded-xl w-full`}
        placeholder={placeholder}
        type={type}
        {...fieldProps}
      />
      {error && isDirty && (
        <p className="text-danger font-lighter text-sm">{error}</p>
      )}
    </div>
  );
}
