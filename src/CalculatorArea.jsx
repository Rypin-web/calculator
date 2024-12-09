import classes from "./styles/CalculatorArea.module.css";
import Screen from "./Screen.jsx";
import ButtonsArea from "./ButtonsArea.jsx";
import {useState} from "react";

let  type = ``, isAnswer = false
const CalculatorArea = () => {
    const [screenNumb, setScreenNumb] = useState('0')
    const [num1, setNum1] = useState(`0`);

    function catchNumber(type) {
        switch (type) {
            case `Clear`:
                    setNum1(`0`)
                setScreenNumb('0')
                break

            case `←`: screenNumb.length > 1 ? setScreenNumb(screenNumb.slice(0,-1)) : setScreenNumb('0')
                break

            default:
                break
        }
    }

    function makeAnswer (type) {
        if (num1.length < 2) return null
        let answer = 0
        switch (type) {
            case `+`:
                answer = Number(num1.slice(0, -2)) + Number(screenNumb)
                break
            case `-`:
                answer = Number(num1.slice(0, -2)) - Number(screenNumb)
                break
            case `*`:
                answer = Number(num1.slice(0, -2)) * Number(screenNumb)
                break
            case `/`:
                answer = Number(num1.slice(0, -2)) / Number(screenNumb)
                break
        }
        setScreenNumb(answer.toString())
        setNum1(`0`)
        isAnswer = true
    }

    function operation (value) {
        if (num1 === `0`){
            type = value
            setNum1(screenNumb + ' ' + value)
            setScreenNumb(`0`)
        } else {
            type = value
            setNum1(num1.slice(0, -2) + ' ' + value)
            setScreenNumb(`0`)
        }
    }

    function addNumber(value) {

        if (value === '=') {
            makeAnswer(type)
            return null
        }
        if(isAnswer === true && (value !== `=` || value !== `Clear` || value !== `←`)){
            isAnswer = false
            setScreenNumb(`0`)
            if (value !== `=` && value !== `Clear` && value !== `←`) setScreenNumb(value)
            else setScreenNumb(`0`)
        } else {
            if (value === "Clear") catchNumber(value)

            else if (value === "←") catchNumber(value)

            else if (value === '0', '1', "2", "3", "4", "5", "6", "7", "8", "9", "10", ".") {
                if (screenNumb.length > 16) return null
                else {
                    if (screenNumb.includes('.') && value === '.') return null
                    else {
                        if (screenNumb === "0" && value !== '.' && value !== '=') setScreenNumb(value)

                        else if (screenNumb === "0" && value === '.') setScreenNumb(screenNumb + value)

                        else  if (value !== '=') {
                            setScreenNumb(screenNumb.toString() + value)
                        }
                    }
                }
            }
        }


    }

    return (
        <div className={classes.div}>
            <div className={classes.CalculatorArea}>
                <Screen number={screenNumb} num={num1}/>
                <ButtonsArea func={addNumber} oper={operation}/>
                <p className={classes.p}>Калькулятор может имееть погрешность из-за устройства работы памяти компьютера</p>
            </div>
        </div>

    );
};

export default CalculatorArea;