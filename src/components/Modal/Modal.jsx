import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import style from './Modal.module.scss'


export default function Modal({reTask, saveNewtask}) {
    const [value, setValue]= useState(reTask)

    function reInpTask (e){
      let newObj ={...value}
      newObj.title = e.target.value
      setValue(newObj)
    }

    function handleClick (){
      saveNewtask(value);
    }
    return (
        <div className={style.mainModal}>
           <div className ={style.ntModal}>
               <div>
                   <Button>✖️</Button>
                   <Input 
                     value={value.title}
                     onChange={reInpTask}
                   />
                   <Button onClick={handleClick}>Save</Button>
               </div>
           </div>
        </div>
    )
}
