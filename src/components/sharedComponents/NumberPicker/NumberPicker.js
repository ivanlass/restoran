import { useState } from "react";
import styles from './numberPicker.module.css'

function NumberPicker() {
const [value, setValue] = useState(0)

const subtract = () => {
    value <= 0 ? setValue(0) : setValue(value - 1)
}

  return (
    <div className={styles['number-picker']}>
        {value> 0 ?
        <>
        <button className={styles['btn-num-picker']} onClick={subtract}>-</button>
        <input disabled className={styles['input-num-picker']} type="number" value={value} />
        </>
    : <span onClick={()=> setValue(value + 1)} className={styles['label-num-picker']}>Dodaj u korpu</span>
    }
        <button className={styles['btn-num-picker']} onClick={()=> setValue(value + 1)}>+</button>

    </div>
  );
}

export default NumberPicker;
