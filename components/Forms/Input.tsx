import { InputHTMLAttributes, useState } from 'react'
import { ErrorLabel } from '../Forms/validation/ErrorLabel'
import { useInternationalization } from '../Hooks'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  error?: string
}

export const Input: React.VFC<InputProps> = (props) => {
  const errorMessage = props.error
  const required = useInternationalization('req')
  return (
    <div>
      <label
        htmlFor={props.name}
        data-testid="input-label"
        className="text-2xl lg:text-base"
      >
        {props.error !== undefined && (
          <ErrorLabel errorMessage={errorMessage} />
        )}
        {props.required && <span className="text-danger">*</span>} {props.label}
        {props.required && <span className="text-danger"> ({required})</span>}
      </label>
      <input
        name={props.name}
        data-testid={props.name}
        {...props}
        className={`form-control ${
          props.error !== undefined && 'border-danger'
        }`}
      />
    </div>
  )
}
