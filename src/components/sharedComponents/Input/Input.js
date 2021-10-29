import styles from './input.module.css'


function Input({placeholder, getValue, type, required, disabled}) {

  return (
    <>
        <input 
        type={type}
        disabled={disabled}
        required={required}
        className={styles['input']} 
        placeholder={placeholder} 
        onChange={e => getValue(type==="file" ? e.target.files[0] : e.target.value)}/>
    </>
  );
}

export default Input;
