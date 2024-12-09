import classes from "../ButtonBig/ButtonBig.module.css";

const ButtonBig = ({children, ...props}) => {
    return (
        <div className={classes.div}>
            <button className={classes.ButtonBig} {...props} onClick={()=>props.func(children)}>
                {children}
            </button>
        </div>
    );
};

export default ButtonBig;