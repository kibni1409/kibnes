import classes from './Body.module.css';
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

const Body = () => {
    return (
        <div className={classes.body_wrapper}>
            <LeftBar className={classes.leftbar} />
            <RightBar className={classes.rightbar}/>
        </div>
    );
}

export default Body;