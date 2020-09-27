export default function calculateDueDate(lmpDate) {
  const [currentYear, currentMonth, currentDay] = lmpDate.split("-")
  let expectedYear = parseInt(currentYear) + 1
  let expectedMonth = parseInt(currentMonth) - 3
  let expectedDay = parseInt(currentDay) + 7

  if (expectedMonth < 1) {
    expectedMonth = 12 + expectedMonth
    expectedYear--
  }

  return calculateCorrectIfTooManyDaysInMonth(expectedMonth, expectedDay, expectedYear).join("/")
}

function calculateCorrectIfTooManyDaysInMonth(month, day, year) {

  if (month === 1 && day > 31) {
    let difference = day - 31
    day = difference
    month++
  }
  else if (month === 2 && day > determineFebDayAmount(year)) {
    let difference = day - determineFebDayAmount(year)
    day = difference
    month++
  }
  else if (month === 3 && day > 31) {
    let difference = day - 31
    day = difference
    month++
  }
  else if (month === 4 && day > 30) {
    let difference = day - 30
    day = difference
    month++
  }
  else if (month === 5 && day > 31) {
    let difference = day - 31
    day = difference
    month++
  }
  else if (month === 6 && day > 30) {
    let difference = day - 30
    day = difference
    month++
  }
  else if (month === 7 && day > 31) {
    let difference = day - 31
    day = difference
    month++
  }
  else if (month === 8 && day > 31) {
    let difference = day - 31
    day = difference
    month++
  }
  else if (month === 9 && day > 30) {
    let difference = day - 30
    day = difference
    month++
  }
  else if (month === 10 && day > 31) {
    let difference = day - 31
    day = difference
    month++
  }
  else if (month === 11 && day > 30) {
    let difference = day - 30
    day = difference
    month++
  }
  else if (month === 12 && day > 31) {
    let difference = day - 31
    day = difference
    month++
    year++
  }
  return [month, day, year]
}

function determineFebDayAmount(year) {
  let daysInFeb = 28
  if (year % 4 === 0 && ((year % 100 !== 0) || year % 400 === 0)) daysInFeb++

  return daysInFeb
}