import s from './Steps.module.css'

const Steps = (props) => {
    const handleChange = (e) => {
        props.onStepChange(parseInt(e.target.value))
    }
    console.log(`current step is ${props.curStep}`)
    return (
        <div className={s.StepsContainer}>
            <label className={s.StepItemLabel} aria-label='Step 1 - Your Info'>
                <input type="radio" className={s.StepItemCheckbox} value='1' checked={props.curStep === 1} onChange={handleChange} />
                <div className={s.Step}>
                    <div className={props.curStep === 1 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>1</div>
                    <div className={s.StepDetails}>
                        <p className={s.StepOrder}>Step 1</p>
                        <p className={s.StepLabel}>Your Info</p>
                    </div>
                </div>
            </label>
            <label className={s.StepItemLabel} aria-label='Step 2 - Select Plan'>
                <input type="radio" className={s.StepItemCheckbox} value='2' checked={props.curStep === 2} onChange={handleChange} />
                <div className={s.Step}>
                    <div className={props.curStep === 2 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>2</div>
                    <div className={s.StepDetails}>
                        <p className={s.StepOrder}>Step 2</p>
                        <p className={s.StepLabel}>Select Plan</p>
                    </div>
                </div>
            </label>
            <label className={s.StepItemLabel} aria-label='Step 3 - Add-Ons'>
                <input type="radio" className={s.StepItemCheckbox} value='3' checked={props.curStep === 3} onChange={handleChange} />
                <div className={s.Step}>
                    <div className={props.curStep === 3 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>3</div>
                    <div className={s.StepDetails}>
                        <p className={s.StepOrder}>Step 3</p>
                        <p className={s.StepLabel}>Add-Ons</p>
                    </div>
                </div>
            </label>
            <label className={s.StepItemLabel} aria-label='Step 4 - Summary'>
                <input type="radio" className={s.StepItemCheckbox} value='4' checked={props.curStep === 4} onChange={handleChange} />
                <div className={s.Step}>
                    <div className={props.curStep === 4 ? `${s.StepNum} ${s.StepNumActive}` : `${s.StepNum}`}>4</div>
                    <div className={s.StepDetails}>
                        <p className={s.StepOrder}>Step 4</p>
                        <p className={s.StepLabel}>Summary</p>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Steps