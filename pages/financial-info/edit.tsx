import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import { useState } from 'react'
import { FinancialInfo } from '../../components/Layout/Info'
import { useInternationalization } from '../../components/Hooks'

const BRANCH_NUMBER_LENGTH = 6
const INST_NUMBER_LENGTH = 12
const ACCOUNT_NUMBER_LENTH = 12

export default function Index({ data }) {
  const [bError, setBError] = useState<string>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [branchNumber, setBranchNumber] = useState<string>(data.branchNumber)
  const [institutionNumber, setInstitutionNumber] = useState<string>(
    data.institutionNumber
  )
  const [accountNumber, setAccountNumber] = useState<string>(data.accountNumber)
  const branch = useInternationalization('branch')

  const handleReset = async (e) => {
    e.preventDefault()
    if (
      confirm(
        'You are about to reset your account details with Service Canada, are you sure you want to take this action?'
      )
    ) {
      // send reset api request and set loading state

      // set form state
      setBranchNumber('')
      setInstitutionNumber('')
      setAccountNumber('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      setLoading(true)
      // send request to Mo's API
      // await ...
      const error = {
        branchNumber: 'this field is required',
      }
      setBError(error.branchNumber)

      //if you want the error to go away after 5s, just setTimeout for 5s and clear the error fields
    } catch (error) {
      setLoading(false)
      console.log('An error occurred while submitting the form.' + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout data={data} title="Financial Information">
      <FinancialInfo active={true} />
      <form onSubmit={handleSubmit} noValidate>
        <div className="w-1/2 mb-14">
          <Input
            type="text"
            name="branchNumber"
            label={branch}
            value={branchNumber}
            onChange={(e) => setBranchNumber(e.target.value)}
            disabled={loading && true}
            maxLength={6}
            minLength={6}
            error={bError}
            required
          />
          <Input
            type="text"
            name="institutionNumber"
            label="Institution number"
            value={institutionNumber}
            onChange={(e) => setInstitutionNumber(e.target.value)}
            disabled={loading && true}
            maxLength={3}
            minLength={3}
            required
          />
          <Input
            type="text"
            name="accountNumber"
            label="Account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            disabled={loading && true}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-10">
          <input
            type="submit"
            className="btn btn-primary mr-4"
            value="Save"
            disabled={loading && true}
          />
          <input
            type="reset"
            className="btn btn-default"
            value="Clear all"
            onClick={handleReset}
            disabled={loading && true}
          />
        </div>
      </form>
      <NavButtons fromLocation="/" toLocation="/contact-info" />
    </Layout>
  )
}

export const getServerSideProps = async (_context) => {
  return {
    props: {
      data: {
        id: 1,
        firstName: 'Sidra',
        lastName: 'Doe',
        middleName: 'K',
        dob: '1989-01-23',
        sin: '555 555 555',
        maritalStatus: 'Married',
        branchNumber: 786904,
        institutionNumber: 222,
        accountNumber: 1234123,
      },
    },
  }
}
