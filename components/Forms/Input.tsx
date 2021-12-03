import { InputHTMLAttributes, useState } from 'react'
import { ErrorLabel } from '../Forms/validation/ErrorLabel'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error?: string
}

export const Input: React.VFC<InputProps> = (props) => {
  const errorMessage = props.error
  return (
    <div>
      <label htmlFor={props.name}>
        {props.error !== undefined && (
          <ErrorLabel errorMessage={errorMessage} />
        )}
        {props.required && <span className="text-danger">*</span>} {props.label}
        {props.required && <span className="text-danger"> (required)</span>}
      </label>
      <input
        name={props.name}
        {...props}
        className={`form-control ${
          props.error !== undefined && 'border-danger'
        }`}
      />
    </div>
  )
}
