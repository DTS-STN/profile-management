import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const placeHolderOnChange = (e) => void 0

export const Input: React.VFC<InputProps> = (props) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <input
      name={props.name}
      {...props}
      onChange={props.onChange ?? placeHolderOnChange}
      className="form-control"
    />
  </div>
)
