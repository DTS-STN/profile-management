import { CommonFinancialInfo } from '../../components/Layout/CommonFinancialInfo'

export default function Edit({ data }) {
  return (
    <CommonFinancialInfo data={data} isDisabled={false}></CommonFinancialInfo>
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
