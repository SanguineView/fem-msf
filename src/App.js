import { useState } from 'react';

import s from './App.module.css';
import Steps from './Steps';
import Details from './Details'

function App() {
  const [plan, setPlan] = useState(
    {
      name:'',
      email:'',
      phone:'',
      payYearly:true,
      level:2,
      addona: false,
      addonb: false,
      addonc: false,
    })
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

  const handleLevelChange = (e) => {
    setPlan((plan) => {
      return {
        ...plan,
        level:e.target.value
      }
    })
  }

  const handleAOAChange = () => {
    setPlan((plan) => {
      return {...plan, 
      addona:!plan.addona
      }
    })
  }

  const handleAOBChange = () => {
    setPlan((plan) => {
      return {...plan, 
      addonb:!plan.addonb
      }
    })
  }

  const handleAOCChange = () => {
    setPlan((plan) => {
      return {...plan, 
      addonc:!plan.addonc
      }
    })
  }

  console.log(plan)
  return (
    <div className={s.App}>
        <Steps curStep={step} />
        <Details
          curStep={step}
          plan={plan}
          onStepIncreseClick={increseStep}
          onStepDecreseClick={decreseStep}
          onChangeYearly={handleYearlyChange}
          onChangeLevel={handleLevelChange}
          onChangeAddOnA={handleAOAChange}
          onChangeAddOnB={handleAOBChange}
          onChangeAddOnC={handleAOCChange}
        />
    </div>
  );
}

export default App;
