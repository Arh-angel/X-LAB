import React, { useEffect, useRef, useState } from 'react';
import style from './Burger.module.scss';

type BurgerProps = {
  handlerStatusBurger: (value:boolean) => void;
}

const Burger = (props: BurgerProps) => {
  const { handlerStatusBurger } = props;
  const [activeBurger, setActiveBurger] = useState(false);
  const burger = useRef<HTMLDivElement>(null);

  const handler = () => {
    setActiveBurger(!activeBurger);
  };

  useEffect(() => {
    handlerStatusBurger(activeBurger);
  }, [activeBurger]);



  return (
    <div role="presentation" ref={burger} className={(activeBurger) ? [style.burger, style.active].join(' ') : style.burger} onClick={handler}>
      <span />
    </div>
  );
};

export default Burger;
