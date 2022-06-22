export const convertToPrice = (someNumber: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(someNumber)
}
