import classes from './Body.module.css';
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

function Body() {
    return (
        <div className={classes.body_wrapper}>

            <LeftBar className={classes.rightbar} />
            <RightBar className={classes.leftbar}/>
        </div>
    );
}

export default Body;