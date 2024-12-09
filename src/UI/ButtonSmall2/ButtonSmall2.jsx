import classes from "./ButtonSmall2.module.css"

const ButtonSmall2 = (props) => {
    return (
        <div className={classes.div}>
            <button className={classes.ButtonSmall} onClick={()=>props.oper(props.children)}>
                {props.children}
            </button>
        </div>
    );
};

export default ButtonSmall2;