import classes from './LeftBar.module.css';

function LeftBar() {
    return (
        <nav className={classes.leftbar_wrapper}>
            <div className={`${classes.item} ${classes.active}`}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>Friends</a>
            </div>
        </nav>
    );
}

export default LeftBar;