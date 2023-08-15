export default function formatDate(
  date: string | [string, string],
  addYear = false
): string {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const formatDateToString = (dateString: string) => {
    const currentDate = new Date(dateString)
    const day = currentDate.getUTCDate()
    const month = monthNames[currentDate.getUTCMonth()]
    const year = currentDate.getUTCFullYear()

    return { day, month, year }
  }

  if (Array.isArray(date)) {
    const [startDate, endDate] = date
    const formattedStartDate = formatDateToString(startDate)
    const formattedEndDate = formatDateToString(endDate)

    if (formattedStartDate.month === formattedEndDate.month) {
      return addYear
        ? `${formattedStartDate.day}. - ${formattedEndDate.day} ${formattedEndDate.month} ${formattedStartDate.year}`
        : `${formattedStartDate.day}. - ${formattedEndDate.day} ${formattedEndDate.month}`
    }

    return addYear
      ? `${formattedStartDate.day} ${formattedStartDate.month} - ${formattedEndDate.day} ${formattedEndDate.month} ${formattedEndDate.year}`
      : `${formattedStartDate.day} ${formattedStartDate.month} - ${formattedEndDate.day} ${formattedEndDate.month}`
  }

  const { day, month, year } = formatDateToString(date)

  return addYear ? `${day}. ${month} ${year}` : `${day}. ${month}`
}
