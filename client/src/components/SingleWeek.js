import React, { useState, useEffect } from 'react'
import findWeekBaseOffOfSlugFromURL from '../helpers/findWeekBaseOffOfSlugFromURL'
import BackButton from './BackButton'

export default function SingleWeek() {
  const [specificWeek, setSpecificWeek] = useState([])

  useEffect(() => {
    async function retrievingWeek() {
      const slugFromURL = window.location.href.split('/weeks/')[1]
      const weekNum = slugFromURL.split('week')[1]

      const retrievedWeek = await findWeekBaseOffOfSlugFromURL(weekNum, slugFromURL)

      setSpecificWeek(retrievedWeek)
    }

    retrievingWeek()
  }, [])

  return (
    <div>
      <h3>{specificWeek.week}</h3>
      <p>{specificWeek.description}</p>
      <img src={`images/${specificWeek.slug}.png`} alt="week" />
      <br />
      <br />
      <BackButton page={`/${specificWeek.trimester}`} />
    </div>
  )
}