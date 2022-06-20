import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
    return <div className={classes.dialogs}>
        Dialogs
        <Dialog name="Dima" id="1" />
        <Dialog name="Sveta" id="2"/>
        <Dialog name="Andrey" id="3"/>
    </div>
}

export default Dialogs;