import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./Filter.module.scss";

interface FilterTypes {
  title: string;
  options?: Array<string>;
  value: string;
  setValue: Dispatch<SetStateAction<string>>
}

export const Filter = ({ title, options, value, setValue }: FilterTypes) => {
  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return <div className={styles.Container}>
    <div>{title}</div>
    <select onChange={(val) => onChange(val)} value={value}>
      {options?.map(option => <option>{option}</option>)}
    </select>
  </div>
}