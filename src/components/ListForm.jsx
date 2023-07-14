import classes from './ListForm.module.css';

import {useState} from 'react';

const ListForm = (props) =>{
    const [enteredText, setEnteredText] = useState('');
    const inputDataHandler = (event) => {
        setEnteredText(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const listData={
            like:0,
            dislike:0,
            text : enteredText
        };
        props.saveListData(listData);
        // console.log(listData);
        setEnteredText('');
    }
    
    return(
        <>
            <form onSubmit={submitHandler} className={classes.forminput}>
                <input className={classes.input} type="text" required value= {enteredText} onChange={inputDataHandler}/>
                <button className={classes.btn} type="submit">Submit</button>
            </form>
        </>
    )
}

export default ListForm;