import { useState } from "react";
import styles from "./input.module.scss";
import { Eye, EyeOff } from "react-feather";

interface InputProps {
  type?: "text" | "email" | "password" | "number" | "file";
  placeholder?: string;
  value: string;
  onChange: any;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  className?: any;
}

const InputTextComponent = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  label,
  required = false,
  disabled = false,
  className = "",
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e: any) => {
    e.preventDefault()
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.inputContainer__label}>{label}</label>}
      <div className="row">
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${styles.inputContainer__field} ${className}`}
      />
      {type == "password" 
      ? <button className={styles.inputContainer__eye} onClick={handleShowPassword}> {showPassword ? <EyeOff size={16} /> : <Eye size={16} />} </button>
      : null}
      </div>
    </div>
  );
};

export default InputTextComponent;
