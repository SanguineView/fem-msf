import s from './Steps.module.css'

const Steps = (props) => {
    return (
        <div className={s.StepsContainer}>
            <div className={s.Step}>
                <div className={props.curStep === 1 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>1</div>
                <div className={s.StepDetails}>
                    <p className={s.StepOrder}>Step 1</p>
                    <p className={s.StepLabel}>Your Info</p>
                </div>
            </div>
            <div className={s.Step}>
                <div className={props.curStep === 2 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>2</div>
                <div className={s.StepDetails}>
                    <p className={s.StepOrder}>Step 2</p>
                    <p className={s.StepLabel}>Select Plan</p>
                </div>
            </div>
            <div className={s.Step}>
                <div className={props.curStep === 3 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>3</div>
                <div className={s.StepDetails}>
                    <p className={s.StepOrder}>Step 3</p>
                    <p className={s.StepLabel}>Add-Ons</p>
                </div>
            </div>
            <div className={s.Step}>
                <div className={props.curStep === 4 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>4</div>
                <div className={s.StepDetails}>
                    <p className={s.StepOrder}>Step 4</p>
                    <p className={s.StepLabel}>Summary</p>
                </div>
            </div>
        </div>
    )
}

export default Steps