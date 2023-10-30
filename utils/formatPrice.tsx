export const formatPrice = (amount: number) =>{
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency:'AUD'
  }).format(amount)
}