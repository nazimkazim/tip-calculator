import React, { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import Container from "./components/Container/Container";
import Half from "./components/Half/Half";
import InfoDisplayer from "./components/InfoDisplayer/InfoDisplayer";
import Input from "./components/Input/Input";
import PercentSelector from "./components/PercentSelector/PercentSelector";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [billPerPerson, setBillPerPerson] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [customTipEnabled, setCustomTipEnabled] = useState(false);

  const calculateBill = () => {
    const tipAmount = bill * (Math.max(tip, customTip) / 100);
    const amount = (bill + tipAmount) / people;
    const billPerPerson = tipAmount / people;
    setTotalBill(amount);
    setBillPerPerson(billPerPerson);
  };

  useEffect(() => {
    if (customTip > 0) {
      setCustomTipEnabled(true);
      setTip(0);
    } else if (tip > 0) {
      setCustomTipEnabled(false);
      setCustomTip(0)
    }
  }, [customTip,tip]);

  return (
    <div className="app">
      <div className="app__header">
        <img src="images/logo.svg" alt="logo" />
      </div>
      <Container>
        <Half background="white">
          <Input
            setValue={setBill}
            logoPath="images/icon-dollar.svg"
            label="Bill"
          />
          <div className="app__percent-selector-wrapper">
            <PercentSelector
              setCustomTip={setCustomTip}
              tip={tip}
              setTip={setTip}
              customTipEnabled={customTipEnabled}
            />
          </div>
          <Input
            setValue={setPeople}
            logoPath="images/icon-person.svg"
            label="Number of people"
          />
        </Half>
        <Half background="dark-gray">
          <div className="app__right-half-container">
            <div className="app__info-displayer-container">
              <div className="app__info-dispalyer-wrapper">
                <InfoDisplayer label="Tip Amount" sum={billPerPerson} />
              </div>
              <div className="app__info-dispalyer-wrapper">
                <InfoDisplayer label="Total" sum={totalBill} />
              </div>
            </div>
            <button onClick={calculateBill} className="app__reset-button">
              RESET
            </button>
          </div>
        </Half>
      </Container>
    </div>
  );
}

export default App;
