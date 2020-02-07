import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import { getSettingsStream, setSettingsStream, settings, dateFormat, Settings } from './Setting';


interface States extends Settings {
  checkIn: string,
};

let settingsInited = false;

const App = () => {

  const [states, setStates] = useState<States>({
    ...settings,
    checkIn: moment().add(1, 'day').format(dateFormat)
  });

  if (!settingsInited) {
    settingsInited = true;
    getSettingsStream().subscribe(settings => {
      const newStates = {
        ...states,
        ...settings,
      };
      setStates(newStates);
    });
  }

  const handleChange = async (event: any) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const settings = { ...states, [target.name]: value };
    setStates(settings);
    setSettingsStream(settings).subscribe();
  };


  const go = () => {
    const { city, checkIn } = states;
    const scannerNumber = settings.scannerNumber = Date.now();
    var newURL = `https://www.agoda.com/zh-tw/search?scannerNumber=${scannerNumber}&city=${city}&checkIn=${checkIn}`;
    console.log('go to ' + newURL);
    if (!chrome.tabs) return;

    setSettingsStream(settings).subscribe(settings => {
      console.log(settings);
      debugger;
      chrome.tabs.update({ url: newURL });
    });
  };

  return (
    <div className="app">
      <label className="title">Agoda Scanner</label>
      <hr />
      <div className="grid">

        <label>開啟</label>
        <input type="checkbox"
          name="isEnabled"
          checked={states.isEnabled}
          onChange={handleChange} />

        <label>掃描持續時間</label>
        <input type="number"
          name="scanSpeed"
          value={states.scanSpeed}
          onChange={handleChange} />

        <label>城市</label>
        <input type="number"
          name="city"
          value={states.city}
          onChange={handleChange} />


        <label>入住日</label>
        <input type="text"
          name="checkIn"
          value={states.checkIn}
          onChange={handleChange} />

      </div>

      <button type="button"
        disabled={!states.isEnabled}
        onClick={go}>
        GO!
      </button>

    </div>
  );
}

export default App;
