import { useState, useEffect } from 'react';

import s from './Details.module.css'

const Details = (props) => {
    const [fees, setFees] = useState([])
    const [plan, setPlan] = useState(
    {
      name:'',
      email:'',
      phone:'',
      payYearly:false,
      level:1,
      levelFee:9,
      addona: false,
      aoafee: 0,
      addonb: false,
      aobfee: 0,
      addonc: false,
      aocfee: 0
    })

    useEffect(() => {
        const fees = []
        fees.unshift(plan.levelFee)
        fees.unshift(plan.aoafee)
        fees.unshift(plan.aobfee)
        fees.unshift(plan.aocfee)
        let newTotal = fees.reduce((a,b) => a + b, 0)
        if (plan.payYearly) {
            newTotal = newTotal * 10
        }
        console.log(`The total: ${newTotal}`)
        setFees([...fees])
    }, [plan])

    const handleYearlyChange = () => {
        setPlan((plan) => {
        return {...plan, 
        payYearly:!plan.payYearly
        }
        })
    }

    const handleLevelChange = (e) => {
        let newTotal = updateTotal(parseInt(e.target.value))
        setPlan((plan) => {
        return {
            ...plan,
            level:e.target.value,
            levelFee:newTotal
        }
        })
    }

    const handleAOAChange = (e) => {
        let fee = e.target.checked ? 1 : 0
        
        setPlan((plan) => {
        return {...plan, 
        addona:!plan.addona,
        aoafee: fee
        }
        })
    }

    const handleAOBChange = (e) => {
        let fee = e.target.checked ? 2 : 0

        setPlan((plan) => {
        return {...plan, 
        addonb:!plan.addonb,
        aobfee: fee
        }
        })
    }

    const handleAOCChange = (e) => {
        let fee = e.target.checked ? 2 : 0

        setPlan((plan) => {
        return {...plan, 
        addonc:!plan.addonc,
        aocfee: fee
        }
        })
    }

    const updateTotal = (level) => {
        if (level === 1) {
        return 9
        } else if (level === 2) {
        return 12
        } else if (level === 3) {
        return 15
        }
    }
    return (
        <>
            <div className={s.DetailsContainer}>
                { props.curStep === 1 && <DetailPanelOne plan={plan}/> }
                { props.curStep === 2 && <DetailPanelTwo plan={plan} onChangeYearly={handleYearlyChange} onChangeLevel={handleLevelChange}/> }
                { props.curStep === 3 && <DetailPanelThree plan={plan} onChangeAddOnA={handleAOAChange} onChangeAddOnB={handleAOBChange} onChangeAddOnC={handleAOCChange} /> }
                { props.curStep === 4 && <DetailPanelFour plan={plan} /> }
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
                <label className={s.DetailsPlanCheckboxLabel} aria-label='Arcade'>
                    <input type="radio" className={s.DetailsPlanCheckbox} value='1' checked={parseInt(props.plan.level) === 1} onChange={props.onChangeLevel} />
                    <div className={s.DetailsPlanSelect}>
                        <img className={s.DetailsPlanIcon} src='./assets/images/icon-arcade.svg' alt='Arcade' />
                        <p className={s.DetailsPlanLabel}>Arcade</p>
                        {props.plan.payYearly ? (
                            <>
                                <p className={s.DetailsPlanPrice}>$90/year</p>
                                <p className={s.DetailsPlanPriceNote}>2 Months Free</p>
                            </>
                        ) : <p className={s.DetailsPlanPrice}>$9/mo</p>}
                    </div>
                </label>
                <label className={s.DetailsPlanCheckboxLabel} aria-label='Advanced'>
                    <input type="radio" className={s.DetailsPlanCheckbox} value='2' checked={parseInt(props.plan.level) === 2} onChange={props.onChangeLevel}/>
                    <div className={s.DetailsPlanSelect}>
                        <img className={s.DetailsPlanIcon} src='./assets/images/icon-advanced.svg' alt='Advanced' />
                        <p className={s.DetailsPlanLabel}>Advanced</p>
                        {props.plan.payYearly ? (
                            <>
                                <p className={s.DetailsPlanPrice}>$120/year</p>
                                <p className={s.DetailsPlanPriceNote}>2 Months Free</p>
                            </>
                        ) : <p className={s.DetailsPlanPrice}>$12/mo</p>}
                    </div>
                </label>
                <label className={s.DetailsPlanCheckboxLabel} aria-label='Pro'>
                    <input type="radio" className={s.DetailsPlanCheckbox} value='3' checked={parseInt(props.plan.level) === 3} onChange={props.onChangeLevel}/>
                    <div className={s.DetailsPlanSelect}>
                        <img className={s.DetailsPlanIcon} src='./assets/images/icon-pro.svg' alt='Pro' />
                        <p className={s.DetailsPlanLabel}>Pro</p>
                        {props.plan.payYearly ? ( 
                            <>
                                <p className={s.DetailsPlanPrice}>$150/year</p>
                                <p className={s.DetailsPlanPriceNote}>2 Months Free</p>
                            </>
                        ) : <p className={s.DetailsPlanPrice}>$15/mo</p> }
                    </div>
                </label>
            </div>
            <div className={s.toggleWrapper}>
                <input type="checkbox" className={s.dn} id="dn" onChange={props.onChangeYearly} checked={props.plan.payYearly}/>
                <label htmlFor="dn" className={s.toggle} aria-label='Yearly'>
                    <span className={s.toggle__handler}></span>
                </label>
            </div>
        </>
    )
}

const DetailPanelThree = (props) => {
    return (
        <>
            <h2 className={s.DetailsHeading}>Pick add-ons</h2>
            <p className={s.DetailsCopy}>Add-ons help enhance your gaming experience.</p>
            <label className={s.DetailsAddsLabel} aria-label='Online Service'>
                <input type="checkbox" className={s.DetailsAddsCheckbox} name='addOnnSelection' value='addona' checked={props.plan.addona} onChange={props.onChangeAddOnA} />
                <div className={s.DetailsAddsOption}> 
                    <div className={s.DetailsAddsFakebox}>{props.plan.addona && <p>HAH!</p>}</div>
                    <div className={s.DetailsAddsSelect}>
                        <p className={s.DetailsAddsLabel}>Online service</p>
                        <p className={s.DetailsAddsInfo}>Access to multiplayer games</p>
                    </div>
                    <p className={s.DetailsAddsPrice}>+$1/mo</p>
                </div>
            </label> 


            <label className={s.DetailsAddsLabel} aria-label='Larger storage'>
                <input type="checkbox" className={s.DetailsAddsCheckbox} name='addOnnSelection' value='addonb' checked={props.plan.addonb} onChange={props.onChangeAddOnB} />
                <div className={s.DetailsAddsOption}>
                    <div className={s.DetailsAddsFakebox}>{props.plan.addonb && <p>HAH!</p>}</div>
                    <div className={s.DetailsAddsSelect}>
                        <p className={s.DetailsAddsLabel}>Larger storage</p>
                        <p className={s.DetailsAddsInfo}>Extra 1TB of cloud save</p>
                    </div>
                    <p className={s.DetailsAddsPrice}>+$2/mo</p>
                </div>
            </label>  


            <label className={s.DetailsAddsLabel} aria-label='Customizable Profile'>
                <input type="checkbox" className={s.DetailsAddsCheckbox} name='addOnnSelection' value='addonc' checked={props.plan.addonc} onChange={props.onChangeAddOnC} />
                <div className={s.DetailsAddsOption}>
                    <div className={s.DetailsAddsFakebox}>{props.plan.addonc && <p>HAH!</p>}</div>
                    <div className={s.DetailsAddsSelect}>
                        <p className={s.DetailsAddsLabel}>Customizable Profile</p>
                        <p className={s.DetailsAddsInfo}>Custom theme on your profile</p>
                    </div>
                    <p className={s.DetailsAddsPrice}>+$2/mo</p>
                </div>
            </label>


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