import { useState } from 'react'

import s from './Details.module.css'

const Details = (props) => {
    const [details, setDetails] = useState([])

    return (
        <>
            <div className={s.DetailsContainer}>
                { props.curStep === 1 && <DetailPanelOne plan={props.plan}/> }
                { props.curStep === 2 && <DetailPanelTwo plan={props.plan} onChangeYearly={props.onChangeYearly}/> }
                { props.curStep === 3 && <DetailPanelThree plan={props.plan} /> }
                { props.curStep === 4 && <DetailPanelFour plan={props.plan} /> }
                <div className={s.DetailsButtons}>
                    { props.curStep > 1 && <button className={s.prevButton} onClick={props.onStepDecreseClick}>Go Back</button> }
                    { props.curStep < 4 && <button className={s.nextButton} onClick={props.onStepIncreseClick}>Next Step</button> }
                    { props.curStep === 4 && <button className={s.nextButton}>Confirm</button> }
                </div>
            </div>
        </>
    )
}

const DetailPanelOne = () => {
    return (
        <>
            <h2 className={s.DetailsHeading}>Personal Info</h2>
            <p className={s.DetailsCopy}>Please provied your name, email address, and phone number.</p>
            <form className={s.DetailsForm}>
                <label className={s.DetailsFormLabel} htmlFor='name'>Name</label>
                <input className={s.DetailsFormInput} type='text' placeholder='e.g. Stephen King' id='name' name='name' />
                <label className={s.DetailsFormLabel}htmlFor='emailAddress'>Email Address</label>
                <input className={s.DetailsFormInput} type='text' placeholder='e.g. stephenking@lorem.com' id='emailAddress' name='emailAddress' />
                <label className={s.DetailsFormLabel}htmlFor="phoneNumber">Phone Number</label>
                <input className={s.DetailsFormInput} type="text" placeholder='e.g. +1 234 567 890' id='phoneNumber' name='phoneNumber' />
            </form>
        </>
    )
}

const DetailPanelTwo = (props) => {
    return (
        <>
            <h2 className={s.DetailsHeading}>Select your plan</h2>
            <p className={s.DetailsCopy}>You have the option of monthly or yearly billing.</p>
            <div className={s.DetailsPlanOptions}>
                <label className={s.DetailsPlanCheckboxLabel}>
                    <input type="radio" className={s.DetailsPlanCheckbox} name='planSelection' value='1'/>
                    <div className={s.DetailsPlanSelect}>
                        <img className={s.DetailsPlanIcon} src='./assets/images/icon-arcade.svg' alt='Arcade' />
                        <p className={s.DetailsPlanLabel}>Arcade</p>
                        <p className={s.DetailsPlanPrice}>{props.plan.payYearly ? '$90' : '$9'}/mo</p>
                    </div>
                </label>
                <label className={s.DetailsPlanCheckboxLabel}>
                    <input type="radio" className={s.DetailsPlanCheckbox} name='planSelection' value='2'/>
                    <div className={s.DetailsPlanSelect}>
                        <img className={s.DetailsPlanIcon} src='./assets/images/icon-advanced.svg' alt='Advanced' />
                        <p className={s.DetailsPlanLabel}>Advanced</p>
                        <p className={s.DetailsPlanPrice}>{props.plan.payYearly ? '$120' : '$12'}/mo</p>
                    </div>
                </label>
                <label className={s.DetailsPlanCheckboxLabel}>
                    <input type="radio" className={s.DetailsPlanCheckbox} name='planSelection' value='3'/>
                    <div className={s.DetailsPlanSelect}>
                        <img className={s.DetailsPlanIcon} src='./assets/images/icon-pro.svg' alt='Pro' />
                        <p className={s.DetailsPlanLabel}>Pro</p>
                        <p className={s.DetailsPlanPrice}>{props.plan.payYearly ? '$150' : '$15'}/mo</p>
                    </div>
                </label>
            </div>
            <div className={s.toggleWrapper}>
                <input type="checkbox" className={s.dn} id="dn" onChange={props.onChangeYearly} checked={props.plan.payYearly}/>
                <label htmlFor="dn" className={s.toggle}>
                    <span className={s.toggle__handler}></span>
                </label>
            </div>
        </>
    )
}

const DetailPanelThree = () => {
    return (
        <>
            <h2 className={s.DetailsHeading}>Pick add-ons</h2>
            <p className={s.DetailsCopy}>Add-ons help enhance your gaming experience.</p>
        </>
    )
}

const DetailPanelFour = () => {
    return (
        <>
            <h2 className={s.DetailsHeading}>Finishing up</h2>
            <p className={s.DetailsCopy}>Double-check everything looks OK before confirming.</p>
        </>
    )
}

export default Details 