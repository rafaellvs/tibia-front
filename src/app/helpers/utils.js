export const isEmpty = obj =>
  Object.keys(obj).length === 0

export const capitalizeString = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

// format thead attributes
export const formatAttribute = string => {
  if (string === 'required_level') return 'Level'
  if (string === 'required_vocation') return 'Vocation'

  return capitalizeString(string.replace(/_/, ' '))
}
