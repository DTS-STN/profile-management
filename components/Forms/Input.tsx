import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const placeHolderOnChange = (e) => void 0

export const Input: React.VFC<InputProps> = (props) => (
  <div>
    <label htmlFor={props.name}>
      {props.required && <span className="text-danger">*</span>} {props.label}
      {props.required && <span className="text-danger"> (required)</span>}
    </label>
    <input
      name={props.name}
      {...props}
      onChange={props.onChange ?? placeHolderOnChange}
      className="form-control"
    />
  </div>
)
