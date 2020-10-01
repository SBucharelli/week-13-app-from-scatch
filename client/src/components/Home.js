import React from 'react'
import GetDate from './GetDate'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>Welcome to the Pregnancy Weekly Size Tracking App</h3>
      <p>Let's calculate your estimated due date!</p>
      <p>Please enter the date of your last menstrual period.</p>
      <GetDate />
    </div>
  );
}
