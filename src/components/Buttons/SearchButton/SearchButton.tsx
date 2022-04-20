import classes from './SearchButton.module.css';
import img from '../../../assets/svgs/search.svg';
import React, { createRef, useEffect, useState } from 'react';


interface State{
    value : string,
    focus : boolean
}

const SearchButton : React.FC = () => {

    const [state,setState] = useState<State>({value:'', focus: false});
    const inputRef = createRef<HTMLInputElement>();
    let body 

    const inputChangeHandler = ( e : React.ChangeEvent<HTMLInputElement>)=>{

        setState({
            ...state,
            value : e.currentTarget.value
        })

    }

    const BtnClickHandler = () =>{
        setState({
            ...state,
            focus : !state.focus
        })
    }

    if(state.focus){
        body =<div className={classes.searchBtnWrapper}>
                <img src ={img}/>
                
                <input  ref={inputRef} type='text' placeholder='Titles, people, genres' value={state.value} 
                onChange={(event)=>inputChangeHandler(event)} onBlur={BtnClickHandler}/>
            </div>
    }
    else{
        body= <button className={classes.searchTab} onClick={BtnClickHandler} ><img src={img}/></button>
    }

    useEffect(()=>{
        inputRef.current?.focus();

    
    },[state.focus])

  return (
      <>
      {body}
      </>
        
  )
}

export default SearchButton;