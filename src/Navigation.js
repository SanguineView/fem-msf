
import s from './Navigation.module.css'

const Navigation = (props) => {
    return (
        <div className={props.curStep === 5 ? `${s.NavButtons} ${s.NavButtonsHide}` : `${s.NavButtons}`}>
            {props.curStep > 1 && props.curStep <= 4 && (
                <button className={s.prevButton} onClick={props.onStepDecreaseClick}>
                    Go Back
                </button>
            )}
            {props.curStep < 4 && (
                <button className={s.nextButton} onClick={props.onStepIncreaseClick}>
                    Next Step
                </button>
            )}
            {props.curStep === 4 && (
                <button className={s.nextButton} onClick={props.onStepIncreaseClick}>
                    Confirm
                </button>
            )}
        </div>
    )
}

export default Navigation