import { useRouter } from 'next/router'
import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { UserPreferences } from '../../components/Layout/UserPreferences'
import { NavButtons } from '../../components/NavButtons'
import TimezonePicker from 'react-bootstrap-timezone-picker'
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css'
import { CommonUserPreferences } from './commonUserPreferences'

export default function Index({ data }) {
  return (
    <CommonUserPreferences
      data={data}
      isDisabled={true}
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
