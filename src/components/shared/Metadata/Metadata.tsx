import { FC } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
};

export const Metadata: FC<Props> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={title} />
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default Metadata
