import { useState } from 'react';

import s from './App.module.css';
import Steps from './Steps';
import Details from './Details'
import Navigation from './Navigation';

// const getTotal = () => {}

function App() {
  const [step, setStep] = useState(1)
  const increaseStep = () => {
    setStep(s => s + 1)
  }
  const decreaseStep = () => {
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
        />
        <Navigation 
          curStep={step}
          onStepIncreaseClick={increaseStep}
          onStepDecreaseClick={decreaseStep}
        />
    </div>
  );
}

export default App;
