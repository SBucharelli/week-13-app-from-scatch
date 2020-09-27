import React, { useState, useEffect } from 'react';
import calculateDueDate from '../helpers/calculateDueDate'

export default function GetDate() {
  const [lmpDate, setLMPDate] = useState('');
  const [expectedDate, setExpectedDate] = useState('');

  function updateLMPDate(event) {
    setLMPDate(event.target.value)
  }

  useEffect(() => { setExpectedDate(calculateDueDate(lmpDate)) }, [lmpDate])

  return (
    <>
      <input type="date" value={lmpDate} onChange={updateLMPDate} />
      <div className="dueDate">
        {expectedDate === "NaN/NaN/NaN"
          ? null
          : `Your Expected Due Date Is: ${expectedDate}!`}
      </div>
    </>
  )
}