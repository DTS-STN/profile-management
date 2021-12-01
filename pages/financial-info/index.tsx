import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NavButtons } from '../../components/NavButtons'

export default function Index({ data }) {
  const router = useRouter()
  return (
    <Layout data={data} title="Financial Information">
      <div className="flex justify-between items-start">
        <h2 className="h2 mb-8">Financial Information</h2>
        <button
          className="btn btn-primary"
          onClick={(e) => router.push('/financial-info/edit')}
        >
          Edit
        </button>
      </div>
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
        The three numbers you eill need to enter are at the bottom of the cheque
        from left to right
      </p>
      <div className="grid grid-cols-2 mb-14">
        <form
          action="#"
          onSubmit={(e) => alert('submitted data: ' + e.target[0].value)}
        >
          <Input
            type="text"
            name="branchNumber"
            label="Branch number"
            value={data.branchNumber}
            disabled
          />
          <Input
            type="text"
            name="institutionNumber"
            label="Institution number"
            value={data.institutionNumber}
            disabled
          />
          <Input
            type="text"
            name="accountNumber"
            label="Account number"
            value={data.accountNumber}
            disabled
          />
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
