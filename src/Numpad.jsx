import ButtonSmall from "./UI/ButtonSmall/ButtonSmall.jsx";
import classes from "./styles/Numpad.module.css"
import ButtonBig from "./UI/ButtonBig/ButtonBig.jsx";

const Numpad = (props) => {
    return (
        <div className={classes.column}>
            <div className={classes.row}>
                <ButtonSmall func={props.func}>7</ButtonSmall>
                <ButtonSmall func={props.func}>8</ButtonSmall>
                <ButtonSmall func={props.func}>9</ButtonSmall>
            </div>
            <div className={classes.row}>
                <ButtonSmall func={props.func}>4</ButtonSmall>
                <ButtonSmall func={props.func}>5</ButtonSmall>
                <ButtonSmall func={props.func}>6</ButtonSmall>
            </div>
            <div className={classes.row}>
                <ButtonSmall func={props.func}>1</ButtonSmall>
                <ButtonSmall func={props.func}>2</ButtonSmall>
                <ButtonSmall func={props.func}>3</ButtonSmall>
            </div>
            <div className={classes.row}>
                <ButtonSmall func={props.func}>.</ButtonSmall>
                <ButtonBig func={props.func}>0</ButtonBig>
            </div>
        </div>
    );
};

export default Numpad;