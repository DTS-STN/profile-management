import { CommonUserPreferences } from '../../components/Layout/commonUserPreferences'

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
