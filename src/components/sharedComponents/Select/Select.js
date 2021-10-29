import styles from '../Input/input.module.css'



function Select({options}) {
  return (
    <>
    <select className={styles['input']} name="cars" id="dan">
        {options.map(option => {
          return <option key={option} value={option}>{option}</option>
        })}
    </select>
    </>
  );
}

export default Select;
