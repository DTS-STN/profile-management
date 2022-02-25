import { useRouter } from 'next/router'
import { useInternationalization } from '../../components/Hooks'
import { useEffect, useState } from 'react'
import { CommonFinancialInfo } from '../../components/Layout/CommonFinancialInfo'
import { sendAnalyticsRequest } from '../../utils/web/helpers/utils'

export default function Index({ data }) {
  useEffect(() => {
    // only run on mount on the client
    if (process.browser) {
      const win = window as Window &
        typeof globalThis & { adobeDataLayer: any; _satellite: any }
      const lang = 'eng'
      const creator = 'Employment and Social Development Canada'
      const title = lang + '-profile management-financial information'

      sendAnalyticsRequest(lang, title, creator, win)
    }
  })
  return (
    <CommonFinancialInfo data={data} isDisabled={true}></CommonFinancialInfo>
  )
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/financial/info/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
