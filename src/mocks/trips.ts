import { TripsData } from 'interfaces/TripsData'

export const trips: TripsData[] = [
  {
    id: 1,
    poster:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
    countries: [
      { code: 'pl', name_en: 'Poland' },
      { code: 'uk', name_en: 'United Kingdom' },
      { code: 'de', name_en: 'Germany' },
      { code: 'no', name_en: 'Norway' },
    ],
    title_en: 'European Quest',
    score: 4.6,
    dateFrom: '06/01/2022',
    dateTo: '06/19/2022',
    originalPrice: 3385,
    price: 2877,
    currency: 'EUR',
  },
  {
    id: 2,
    poster:
      'https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
    countries: [
      { code: 'de', name_en: 'Germany' },
      { code: 'no', name_en: 'Norway' },
    ],
    title_en: 'Simply Italy',
    score: 4.4,
    dateFrom: '06/01/2022',
    dateTo: '06/16/2022',
    originalPrice: 2155,
    price: 1832,
    currency: 'EUR',
  },
  {
    id: 3,
    poster:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
    countries: [{ code: 'it', name_en: 'Italy' }],
    title_en: 'Italian Espresso',
    score: 4.5,
    dateFrom: '06/01/2022',
    dateTo: '06/02/2022',
    originalPrice: 1800,
    price: 1200,
    currency: 'EUR',
  },
]
