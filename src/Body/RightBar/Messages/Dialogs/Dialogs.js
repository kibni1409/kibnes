import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {

    let DialogsElements = props.el.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)

    return (
        <div className={classes.dialogs}>
            Dialogs
            {DialogsElements}
        </div>
    )
}

export default Dialogs;