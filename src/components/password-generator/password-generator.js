/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './password-generator.module.css';
import {Input} from '../../ui/input';
import {Select} from '../../ui/select';
import {Checkbox} from '../../ui/checkbox';
import {Button} from '../../ui/button';

function PasswordGenerator() {
// Переменные для создания пароля и для определения его длины
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '!@#$()_?.;:'
  const passwordlengthValues = [8,9,10,11,12];

// Создаём состояния 
  const [result, setResult] = React.useState('')
  const [userInputStatus, setUserInputStatus] = React.useState(false)
  const [userInput, setUserInput] = React.useState('')
  const [passwordLength, setpasswordLength] = React.useState(passwordlengthValues[0])
  const [ box, setBox ] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

// Записываем текущую длину пароля
  const handleChangeLength = (event) => {
    setpasswordLength(event.target.value)
  }

// Изменяем состояние чекбокса
  const boxHandler = () => {
    setBox(!box)
  }

// Изменяем состяние для отображения инпута или кнопки
  const handleUserInput = () => {
    setUserInputStatus(!userInputStatus)
  }

// Здесь мы сохраняем ввод юзера
  const userInputhandler = (e) => {
    setUserInput(e.target.value);
  };

// Функция для копирования пароля
function copyHandler () {
  if(result){
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 4000);
  }
}

  const handlePasswordGenerate = () => {
// Переменная куда мы запишем итоговый результат
    let currentResult = '';

// Функция для валидации ввода юзера
    const isvalidateUserInput = () => {
      const splittedUserInput = userInput.split('').filter(el => chars.includes(el))

//Проверка на латиницу
      if(splittedUserInput.length !== userInput.length){
         alert('Пожалуйста введите латиницей')
         return false

// Проверка на длину итогового пароля
      }else if(splittedUserInput.length > passwordLength){
        alert('Введите количество символов меньше длины итогового пароля')
        return false
      }else {
        return true
      }
    }

// Проверка на валидацию
    if(isvalidateUserInput() === true){
      currentResult = userInput;
// Добавляем символы к нашим буквам
      if(box){
        chars += symbols
      }
// Отнимаем длину ввода от длины итогового пароля
      const passlength = passwordLength - currentResult.length
      for (let i = 0; i < passlength ; i++) {
        let randomNum = Math.floor(Math.random() * chars.length)
         currentResult += chars[randomNum];
      }
    }else{
      for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * chars.length)
         currentResult += chars[randomNum];
      }
    }
    
// Записываем конечную строку в наш соответсвующий state
    setResult(currentResult)
// Очищаем наш ввод 
    setUserInput('')

    if(userInputStatus){
      setUserInputStatus(!userInputStatus)
    }
  }

  return (
    <div className={styles['root']}>
      <h1 className={styles['title']}>Password Generator</h1>
      <div className={styles['result']}>

    { userInputStatus ? (<Input type='text'
         readonly={false} 
         name='user' 
         value={userInput.name} 
         placeholder='Введите ключевое слово для пароля'
         onChange={userInputhandler} />) :
          <Button type='button' onClick={handleUserInput}> Add </Button>
        }

        
        <Input 
        type='text' 
        readonly={true} 
        defaultValue={result} />

        <button className={styles['copy']} onClick={copyHandler}></button>
        {copied && <span className={styles['copied']}>Скопировано!</span>}
      </div>
      <div className={styles['option']}>
        <span className={styles['option-name']}>Длина пароля</span>
        <Select options={passwordlengthValues} onBlur={handleChangeLength}></Select>
      </div>
      <div className={styles['option']}>
        <label className={styles['option-label']} htmlFor='symbols'> Использовать символы</label>
        <Checkbox defaultChecked={false} onChange={boxHandler} id='symbols' />
      </div>
      <Button type='button' onClick={handlePasswordGenerate}> GENERATE </Button>
    </div>
  )
}

export {PasswordGenerator}
