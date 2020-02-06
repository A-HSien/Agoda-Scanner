import React, { useState, useEffect } from 'react';
import './App.css';
import { getSettingsAsync, setSettingsAsync, settings } from './Setting';


const App = () => {

  const [states, setStates] = useState({ ...settings });

  useEffect(() => {
    (async () => {
      const settings = await getSettingsAsync();
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
      </div>
    </div>
  );
}

export default App;
