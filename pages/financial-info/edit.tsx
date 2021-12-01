import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import Image from 'next/image'
import { NavButtons } from '../../components/NavButtons'
import { useState } from 'react'

export default function Index({ data }) {
  const [branchNumber, setBranchNumber] = useState<string>(data.branchNumber)
  const [institutionNumber, setInstituionNumber] = useState<string>(
    data.institutionNumber
  )
  const [accountNumber, setAccountNumber] = useState<string>(data.accountNumber)

  return (
    <Layout data={data} title="Financial Information">
      <h2 className="h2 mb-8">Financial Information</h2>
      <p>
        Payments can be deposited directly to your blank account when you
        provide the following information. You can find your Branch,
        Institution, and Account numbers by logging into your online banking or
        contacting your branch. You can also find these numbers on any void
        cheque.
      </p>
      <div className="flex justify-center items-center my-8">
        <Image
          src="/check.jpeg"
          width="533px"
          height="253px"
          alt="Image of a void cheque"
        />
      </div>
      <p className="mb-12">
        The three numbers you will need to enter are at the bottom of the cheque
        from left to right
      </p>
      <div className="w-1/2 mb-14">
        <form onSubmit={(e) => alert('submitted data: ' + e.target[0].value)}>
          <Input
            type="text"
            name="branchNumber"
            label="Branch number"
            value={branchNumber}
            onChange={(e) => setBranchNumber(e.target.value)}
          />
          <Input
            type="text"
            name="institutionNumber"
            label="Institution number"
            value={institutionNumber}
            onChange={(e) => setInstituionNumber(e.target.value)}
          />
          <Input
            type="text"
            name="accountNumber"
            label="Account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <input
              type="submit"
              className="btn btn-primary mr-4"
              value="Save"
            />
            <input type="reset" className="btn btn-primary" value="Reset" />
          </div>
        </form>
      </div>
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
