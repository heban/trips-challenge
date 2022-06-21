export interface TripsData {
  id: number
  poster: string
  countries: {
    code: string
    name_en: string
  }[]
  title_en: string
  score: number
  dateFrom: string
  dateTo: string
  originalPrice: number
  price: number
}
