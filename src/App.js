import { useState } from 'react';

import s from './App.module.css';
import Steps from './Steps';
import Details from './Details'

function App() {
  const [plan, setPlan] = useState({payYearly:false})
  const [step, setStep] = useState(1)
  const increseStep = () => {
    setStep(s => s + 1)
  }

  const decreseStep = () => {
    setStep(s => s - 1)
  }

  const handleYearlyChange = () => {
    setPlan((plan) => {
      return {...plan, 
      payYearly:!plan.payYearly
      }
    })
  }

  const handlePlanChange = () => {
    setPlan((plan) => {
      return {
        ...plan
      }
    })
  }
  return (
    <div className={s.App}>
        <Steps curStep={step} />
        <Details curStep={step} onStepIncreseClick={increseStep} onStepDecreseClick={decreseStep} plan={plan} onChangeYearly={handleYearlyChange}/>
    </div>
  );
}

export default App;
