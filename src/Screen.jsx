import classes from "./styles/Screen.module.css"

const Screen = (props) => {

    return (
        <div className={classes.screen}>
            <p style={{fontSize:14}}>{props.num}</p>
            <p>{props.number}</p>
        </div>
    );
};

export default Screen;