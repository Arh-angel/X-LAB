import React, { ChangeEvent, useState } from "react";
import SearchService from "../../services/SearchService";
import Button from "../common/Button";
import Input from "../common/Input";
import style from './SearchComponent.module.scss';

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [addresses, setAddresses] = useState<{value:string}[]>([]);

  const handlerInputValue = (value:string) => {
    setInputValue(value);
  }

  const handlerButton = async () => {
    const response = await SearchService.searchAddress(inputValue);

    setAddresses(response.data.suggestions)

    console.log(response.data.suggestions)
  }

  return(
    <div className={style.container}>
      <h1 className={style.title}>Поиск адресов</h1>
      <p className={style.aboutInput}>Введите интересующий вас адрес</p>
      <div className={style.searchInput}>
        <Input value={inputValue} handlerInputValue={handlerInputValue} />
        <Button handlerButton={handlerButton} />
      </div>
      <div className={style.foundAddresses}>
        <h2 className={style.subtitle}>Адреса</h2>
        <ul className={style.addressList}>
        {addresses.map(address => {
          return <li className={style.address}>{address.value}</li>
        })}
        </ul>
      </div>

    </div>
  )
}

export default SearchComponent;
