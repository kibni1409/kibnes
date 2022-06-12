import './Body.css';
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

function Body() {
    return (
        <div className="body-wrapper">

            <LeftBar className="leftbar" />
            <RightBar className="rightbar"/>
        </div>
    );
}

export default Body;