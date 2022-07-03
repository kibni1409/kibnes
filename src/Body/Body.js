import classes from './Body.module.css';
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

const Body = (props) => {
    return (
        <div className={classes.body_wrapper}>
                <LeftBar/>
                <RightBar
                    dispatch={props.dispatch}
                    M_el={props.M_el}
                    D_el={props.D_el}
                    P_el={props.P_el}
                    N_el={props.N_el}
                />
        </div>
    );
}

export default Body;