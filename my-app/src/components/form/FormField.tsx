import React from 'react';

interface TextFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

export const TextField1: React.FC<TextFieldProps> = ({
  name,
  label,
  type = 'text',
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} required={required} />
    </div>
  );
};

interface CheckboxFieldProps {
  name: string;
  label: string;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ name, label }) => {
  return (
    <div>
      <label htmlFor={name}>
        <input type="checkbox" name={name} id={name} />
        {label}
      </label>
    </div>
  );
};
