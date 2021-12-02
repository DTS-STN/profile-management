import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import Image from 'next/image'
import { NavButtons } from '../../components/NavButtons'
import { useState } from 'react'
import { FinancialInfo } from './Info'

export default function Index({ data }) {
  const [loading, setLoading] = useState<boolean>(false)
  const [branchNumber, setBranchNumber] = useState<string>(data.branchNumber)
  const [institutionNumber, setInstitutionNumber] = useState<string>(
    data.institutionNumber
  )
  const [accountNumber, setAccountNumber] = useState<string>(data.accountNumber)

  const handleReset = async (e) => {
    e.preventDefault()
    if (
      confirm(
        'You are about to reset your account details with Service Canada, are you sure you want ot take this action?'
      )
    ) {
      // send reset api request and set loading state
      setBranchNumber('')
      setInstitutionNumber('')
      setAccountNumber('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      // send request
      const data = await (
        await fetch('https://baconipsum.com/api/?type=meat-and-filler')
      ).json()
      console.log(data)
    } catch (error) {
      setLoading(false)
      console.log('An error occurred while submitting the form.' + error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout data={data} title="Financial Information">
      <FinancialInfo />
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 mb-14">
          <Input
            type="text"
            name="branchNumber"
            label="Branch number"
            value={branchNumber}
            onChange={(e) => setBranchNumber(e.target.value)}
            disabled={loading && true}
            required
          />
          <Input
            type="text"
            name="institutionNumber"
            label="Institution number"
            value={institutionNumber}
            onChange={(e) => setInstitutionNumber(e.target.value)}
            disabled={loading && true}
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
