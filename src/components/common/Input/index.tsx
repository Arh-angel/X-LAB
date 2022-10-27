import React, { useState } from "react";
import style from './Input.module.scss';

type InputProps = {
  value: string;
  handlerInputValue: (value:string) => void
}

const Input = (props: InputProps) => {
  const { value, handlerInputValue } = props;

  return(
    <input className={style.input} type="text" value={value} onChange={(event) => handlerInputValue(event.target.value)} />
  )
}

export default Input;
