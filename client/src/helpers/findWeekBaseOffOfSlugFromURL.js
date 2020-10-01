import config from '../config'

export default async function findWeekBaseOffOfSlugFromURL(weekNum, slug) {
  let specificWeek = {}
  if (weekNum < 14) {
    await fetch(`${config.API_URL}firstTrimester`)
      .then(response => response.json())
      .then(value => value.filter(week => week.slug === slug)[0])
      .then(value => specificWeek = value)
  } else if (weekNum > 26) {
    await fetch(`${config.API_URL}thirdTrimester`)
      .then(response => response.json())
      .then(value => value.filter(week => week.slug === slug)[0])
      .then(value => specificWeek = value)
  } else {
    await fetch(`${config.API_URL}secondTrimester`)
      .then(response => response.json())
      .then(value => value.filter(week => week.slug === slug)[0])
      .then(value => specificWeek = value)
  }

  return specificWeek
}
