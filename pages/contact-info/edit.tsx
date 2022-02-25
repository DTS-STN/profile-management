import React, { useEffect, useState } from 'react'
import { CommonContactInfo } from '../../components/Layout/commonContactInfo'
import { sendAnalyticsRequest } from '../../utils/web/helpers/utils'

const RESIDENTIAL_ADDRESS = 1
const MAILING_ADDRESS = 2

export default function Edit({ data }) {
  useEffect(() => {
    // only run on mount on the client
    if (process.browser) {
      const win = window as Window &
        typeof globalThis & { adobeDataLayer: any; _satellite: any }
      const lang = 'eng'
      const creator = 'Employment and Social Development Canada'
      const title = lang + '-profile management-contact information'

      sendAnalyticsRequest(lang, title, creator, win)
    }
  })
  return <CommonContactInfo data={data} isDisabled={false}></CommonContactInfo>
}

export const getServerSideProps = async (_context: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/contact/info/${_context.query.id}`
  )
  const data = await res.json()
  return {
    props: {
      data: data,
    },
  }
}
