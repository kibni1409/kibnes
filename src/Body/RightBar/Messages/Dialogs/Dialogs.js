import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import React  from 'react';


const Dialogs = (props) => {
    let DialogsElements = props.Dialog_elements.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    return (

        <div className={classes.dialogs}>
            Dialogs
            {DialogsElements}
        </div>
    )
}

export default Dialogs;