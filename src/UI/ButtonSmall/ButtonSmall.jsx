import classes from "./ButtonSmall.module.css"

const ButtonSmall = (props) => {
    return (
        <div className={classes.div}>
            <button className={classes.ButtonSmall} onClick={()=> props.func(props.children)}>
                {props.children}
            </button>
        </div>
    );
};

export default ButtonSmall;