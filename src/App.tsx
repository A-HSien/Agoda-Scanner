import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';
import { getSettingsAsync, setSettingsAsync, settings, dateFormat } from './Setting';


const App = () => {

  const [states, setStates] = useState({ ...settings });

  useEffect(() => {
    (async () => {
      const settings = await getSettingsAsync();
      settings.checkIn = moment().add(1, 'day').format(dateFormat)
      setStates(settings);
    })();
  });

  const handleChange = async (event: any) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const settings = { ...states, [target.name]: value };
    setStates(settings);
    await setSettingsAsync(settings);
  };

  const go = () => {
    if (!chrome) return;
    const { city, checkIn } = states;
    var newURL = `https://www.agoda.com/zh-tw/search?city=${city}&checkIn=${checkIn}`;
    chrome.tabs.create({ url: newURL });
  };

  return (
    <div className="app">
      <h3>Agoda Scanner</h3>
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
{/*       <button type="button" >
        GO!
        </button> */}
    </div>
  );
}

export default App;
