import ButtonSmall2 from "./UI/ButtonSmall2/ButtonSmall2.jsx";
import classes from "./styles/ArithmeticArea.module.css"

const ArithmeticArea = (props) => {
    return (
        <div className={classes.AritmeticArea}>
            <ButtonSmall2 oper={props.oper}>+</ButtonSmall2>
            <ButtonSmall2 oper={props.oper}>-</ButtonSmall2>
            <ButtonSmall2 oper={props.oper}>*</ButtonSmall2>
            <ButtonSmall2 oper={props.oper}>/</ButtonSmall2>
        </div>
    );
};

export default ArithmeticArea;