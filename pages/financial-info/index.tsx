import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import { useRouter } from 'next/router'
import { useInternationalization } from '../../components/Hooks'
import { useState } from 'react'
import { CommonFinancialInfo } from './CommonFinancialInfo'

export default function Index({ data }) {
  const router = useRouter()
  const userData = router.query.id

  const financialInfo = data.userFinancialInfo

  const [institutionNumberError, setInstitutionNumberError] =
    useState<string>(undefined)
  const [branchNumberError, setBranchNumberError] = useState<string>(undefined)
  const [accountNumberError, setAccountNumberError] =
    useState<string>(undefined)

  const [loading, setLoading] = useState<boolean>(false)
  const [infoMessage, setInfoMessage] = useState<string>(undefined)
  const [errorMessage, setErrorMessage] = useState<string>(undefined)

  const [branchNumber, setBranchNumber] = useState<string>(
    financialInfo ? financialInfo.transitNumber : ''
  )
  const [institutionNumber, setInstitutionNumber] = useState<string>(
    financialInfo ? financialInfo.institutionNumber : ''
  )
  const [accountNumber, setAccountNumber] = useState<string>(
    financialInfo ? financialInfo.accountNumber : ''
  )

  const branch = useInternationalization('branch')
  const institution = useInternationalization('institution')
  const account = useInternationalization('account')
  const submitErrorMsg = useInternationalization('submitError')

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
