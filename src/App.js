import { useState } from 'react';

import s from './App.module.css';
import Steps from './Steps';
import Details from './Details'

// const getTotal = () => {}

function App() {
  const [step, setStep] = useState(1)
  const increseStep = () => {
    setStep(s => s + 1)
  }
  const decreseStep = () => {
    setStep(s => s - 1)
  }
  const jumpStep = (newStep) => {
		if (step > 4) {
			setStep(5)
			return
		}
		setStep(newStep)
	}
  return (
    <div className={s.App}>
        <Steps
          curStep={step} 
          onStepChange={jumpStep} 
        />
        <Details
          curStep={step}
          onStepChange={jumpStep}
          onStepIncreseClick={increseStep}
          onStepDecreseClick={decreseStep}
        />
    </div>
  );
}

export default App;
