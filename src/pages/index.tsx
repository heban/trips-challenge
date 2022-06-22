import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import useSwr from 'swr'
import { Metadata } from 'components/shared/Metadata'
import { Layout } from 'components/shared/Layout'
import { TripsProps } from 'interfaces/TripsProps'

const apiUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/' : process.env.API_URL
const fetcher = (url: string) => fetch(`${apiUrl}${url}`).then((res) => res.json())

const Trips = dynamic<TripsProps>(() => import('components/Trips/Trips'), {
  suspense: true,
})

const Home: NextPage = () => {
  const { data } = useSwr('/api/trips', fetcher, { suspense: true })

  return (
    <>
      <Metadata title="Trips challenge" description="A challenge created with a help from create next app" />
      <Layout>
        <Trips items={data} />
      </Layout>
    </>
  )
}

export default Home
