import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import { FinancialInfo } from '../../components/Layout/Info'
import { useRouter } from 'next/router'
import { useInternationalization } from '../../components/Hooks'
import { useState } from 'react'

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
    <Layout data={data} title="Financial Information">
      <FinancialInfo />

      <form noValidate>
        <fieldset className="fieldset">
          <legend>
            <h4 className="h4 mb-4">Financial Information</h4>
          </legend>
          <div className="w-1/2 mb-14">
            <Input
              type="text"
              name="transitNumber"
              label="Branch Number"
              value={branchNumber}
              size={10}
              disabled
            />
            <Input
              type="text"
              name="institutionNumber"
              label="Financial Institution Number"
              value={institutionNumber}
              disabled
            />
            <Input
              type="text"
              name="accountNumber"
              label="Account Number"
              value={accountNumber}
              disabled
            />
          </div>
        </fieldset>
      </form>
      <br></br>
      <NavButtons
        fromLocation={`/personal-info?id=${userData}`}
        toLocation={`/contact-info?id=${userData}`}
      />
    </Layout>
  )
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.API_SERVER_BASE_URL}/user/financial/info/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
