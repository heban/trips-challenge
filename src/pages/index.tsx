import type { NextPage } from 'next'
import { Metadata } from 'components/shared/Metadata'
import { Layout } from 'components/shared/Layout'
import { Content } from 'components/shared/Content'

const Home: NextPage = () => {
  return (
    <>
      <Metadata title="Trips challenge" description="A challenge created with a help from create next app" />
      <Layout>
        <Content>Empty content</Content>
      </Layout>
    </>
  )
}

export default Home
