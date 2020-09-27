export default async function findWeekBaseOffOfSlugFromURL(weekNum, slug) {
  let specificWeek = {}
  if (weekNum < 14) {
    await fetch("http://localhost:9000/firstTrimester")
      .then(response => response.json())
      .then(value => value.filter(week => week.slug === slug)[0])
      .then(value => specificWeek = value)
  } else if (weekNum > 26) {
    await fetch("http://localhost:9000/thirdTrimester")
      .then(response => response.json())
      .then(value => value.filter(week => week.slug === slug)[0])
      .then(value => specificWeek = value)
  } else {
    await fetch("http://localhost:9000/secondTrimester")
      .then(response => response.json())
      .then(value => value.filter(week => week.slug === slug)[0])
      .then(value => specificWeek = value)
  }

  return specificWeek
}
