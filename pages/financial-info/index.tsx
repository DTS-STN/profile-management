import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import { FinancialInfo } from '../../components/Layout/Info'

export default function Index({ data }) {
  return (
    <Layout data={data} title="Financial Information">
      <FinancialInfo />
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
  //
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
