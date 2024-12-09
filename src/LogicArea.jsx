import ButtonBig from "./UI/ButtonBig/ButtonBig.jsx";
import ButtonSmall from "./UI/ButtonSmall/ButtonSmall.jsx";
import classes from "./styles/LogicArea.module.css"

const LogicArea = (props) => {
    return (
        <div className={classes.LogicArea}>
            <div className={classes.div}>
                <ButtonBig func={props.func}>Clear</ButtonBig>
                <ButtonSmall func={props.func}>←</ButtonSmall>
            </div>
            <div>
                <ButtonSmall func={props.func}>=</ButtonSmall>
            </div>
        </div>
    );
};

export default LogicArea;