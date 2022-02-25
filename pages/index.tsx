import { Layout } from '../components/Layout'
import Head from 'next/head'
import { NavButtons } from '../components/NavButtons'
import { useEffect, useState } from 'react'
import { useStorage, useTranslation } from '../components/Hooks'
import { sendAnalyticsRequest } from '../utils/web/helpers/utils'
import { UserList } from '../components/Layout/UserList'

export default function Home({ data }) {
  useEffect(() => {
    // only run on mount on the client
    if (process.browser) {
      const win = window as Window &
        typeof globalThis & { adobeDataLayer: any; _satellite: any }
      const lang = 'eng'
      const creator = 'Employment and Social Development Canada'
      const title = lang + '-profile management-user list'

      sendAnalyticsRequest(lang, title, creator, win)
    }
  })

  return (
    <div>
      <Head>
        <title>User List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://assets.adobedtm.com/be5dfd287373/0127575cd23a/launch-913b1beddf7a-staging.min.js"></script>
      </Head>
      <Layout data={data} title="User list">
        <UserList data={data} />
      </Layout>
      <script src="/scripts/adobe.js"></script>
      <script type="text/javascript">_satellite.pageBottom()</script>
    </div>
  )
}

export const getServerSideProps = async (_context: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/personal/Info/`
  )
  const data = await res.json()

  let users = []

  data.forEach((user: { _id: any; lastName: string; firstName: string }) => {
    users.push({
      value: user._id,
      label: user.lastName + ', ' + user.firstName,
    })
  })

  return {
    props: {
      data: users,
    },
  }
}
