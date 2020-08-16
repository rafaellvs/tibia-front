// check if value is a valid number. If so, converts it
// reference: https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
const formatValue = value =>
  isNaN(value)
    ? value
    : +value

export const sortAscendingByKey = (array, key) =>
  array.sort((a, b) =>
    formatValue(a[key]) === formatValue(b[key])
      ? 0
      : formatValue(a[key]) > formatValue(b[key])
        ? 1
        : -1
  )

export const sortDescendingByKey = (array, key) =>
  array.sort((a, b) =>
    formatValue(a[key]) === formatValue(b[key])
      ? 0
      : formatValue(a[key]) < formatValue(b[key])
        ? 1
        : -1
  )

export const sort = (response, setFullData, columns, column) => {
  const button = document.querySelector(`#${column}-sort`)

  const arrowNone = 'none'
  const arrowAsc = 'rotate(90deg)'
  const arrowDesc = 'rotate(-90deg)'

  button.style.transform =
  button.style.transform === arrowDesc
    ? arrowAsc
    : arrowDesc

  columns.map(c => {
    if (c !== column) {
      document.querySelector(`#${c}-sort`).style.transform = arrowNone
    }
  })

  const responseCopy = [...response]
  button.style.transform === arrowAsc
    ? setFullData(sortAscendingByKey(responseCopy, column))
    : setFullData(sortDescendingByKey(responseCopy, column))
}
