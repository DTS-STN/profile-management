import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'

export default function Index({ data }) {
  return (
    <Layout data={data}>
      <div className="flex justify-between items-start">
        <h2 className="h2 mb-8">Financial Information</h2>
        <button className="btn btn-primary">Edit</button>
      </div>
      <p>
        Payments can be deposited directly to your blank account when you
        provide the following information. You can find your Branch,
        Institution, and Account numbers by logging into your online banking or
        contacting your branch. You can also find these numbers on any void
        cheque.
      </p>
      <div className="flex justify-center items-center h-52">
        <p>Need void cheque image</p>
      </div>
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
          />
          <Input
            type="text"
            name="institutionNumber"
            label="Institution number"
            value={data.institutionNumber}
          />
          <Input
            type="text"
            name="accountNumber"
            label="Account number"
            value={data.accountNumber}
          />
        </form>
      </div>
      <div className="flex justify-between items-center"></div>
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
