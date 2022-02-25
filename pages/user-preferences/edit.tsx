import { useEffect } from 'react'
import { CommonUserPreferences } from '../../components/Layout/commonUserPreferences'
import { sendAnalyticsRequest } from '../../utils/web/helpers/utils'

export default function Edit({ data }) {
  useEffect(() => {
    // only run on mount on the client
    if (process.browser) {
      const win = window as Window &
        typeof globalThis & { adobeDataLayer: any; _satellite: any }
      const lang = 'eng'
      const creator = 'Employment and Social Development Canada'
      const title = lang + '-profile management-user preference'

      sendAnalyticsRequest(lang, title, creator, win)
    }
  })

  return (
    <CommonUserPreferences
      data={data}
      isDisabled={false}
    ></CommonUserPreferences>
  )
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/pref/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
