export const camelToCapitalWithSpaces = camelCase => {
  if (camelCase === null || camelCase === '') {
    return camelCase
  }

  return camelCase.trim().replace(/\B([A-Z])\B/g, ' $1')
}
