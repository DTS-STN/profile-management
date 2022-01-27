import { useRouter } from 'next/router'
import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import TimezonePicker from 'react-bootstrap-timezone-picker'
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css'
import { ErrorLabel } from '../../components/Forms/validation/ErrorLabel'
import { SubmitMessage } from '../../components/Forms/validation/SubmitMessage'
import { useInternationalization } from '../../components/Hooks'
import { CommonUserPreferences } from './commonUserPreferences'

export default function Edit({ data }) {
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
