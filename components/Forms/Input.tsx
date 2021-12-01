import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export const Input: React.VFC<InputProps> = (props) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <input name={props.name} {...props} className="form-control" />
  </div>
)
