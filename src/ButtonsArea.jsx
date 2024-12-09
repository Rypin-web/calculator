import LogicArea from "./LogicArea.jsx";
import Numpad from "./Numpad.jsx";
import ArithmeticArea from "./ArithmeticArea.jsx";
import classes from "./styles/ButtonsArea.module.css";

const ButtonsArea = (props) => {
    return (
        <div>
            <LogicArea func={props.func}/>
            <div className={classes.NumpadAndArithmetic}>
                <Numpad func={props.func}/>
                <ArithmeticArea oper={props.oper}/>
            </div>
        </div>
    );
};

export default ButtonsArea;