import { InputHTMLAttributes, useState } from 'react'
import { ErrorLabel } from '../Forms/validation/ErrorLabel'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  customErrorMessage?: string
  errorTimeout?: number
}

export const Input: React.VFC<InputProps> = (props) => {
  const errorMessage = props.customErrorMessage
  return (
    <div>
      <label htmlFor={props.name}>
        {props.customErrorMessage !== undefined && (
          <ErrorLabel errorMessage={errorMessage} />
        )}
        {props.required && <span className="text-danger">*</span>} {props.label}
        {props.required && <span className="text-danger"> (required)</span>}
      </label>
      <input
        name={props.name}
        {...props}
        className={`form-control ${
          props.customErrorMessage !== undefined && 'border-danger'
        }`}
      />
    </div>
  )
}
