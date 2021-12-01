import { GetStaticProps } from 'next'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Input } from '../components/Forms/Input'
import { Layout } from '../components/Layout'
import { NavigationHeader } from '../components/NavigationHeader'

export default function Home({ data }) {
  return (
    <Layout>
      <Breadcrumbs
        items={['Service Canada', 'OAS/GIS Account', 'Personal Information']} // last item is page name
      />
      {/* 
      TODO: h1's require red underlines according to spec, talk to Ishita
       */}
      <h1 className="h1 my-8 mb-10">Welcome, {`${data.firstName}`}</h1>
      <NavigationHeader />
      <hr className="border-b border-black/20 my-10" />

      <h2 className="h2 mb-8">Personal Information</h2>
      <div className="grid grid-cols-2 mb-14">
        <form
          action="#"
          onSubmit={(e) => alert('submitted data: ' + e.target[0].value)}
        >
          <Input
            type="text"
            name="firstName"
            label="First Name"
            value={data.firstName}
            disabled
          />
          <Input
            type="text"
            name="middleName"
            label="Middle Name"
            value={data.middleName}
            disabled
          />
          <Input
            type="text"
            name="lastName"
            label="Last Name"
            value={data.lastName}
            disabled
          />
          <Input
            type="text"
            name="dob"
            label="Date of Birth (YYYY-MM-DD)"
            value={data.dob}
            disabled
          />
          <Input
            type="text"
            name="sin"
            label="SIN Number"
            value={data.sin}
            disabled
          />
          <Input
            type="text"
            name="married"
            label="Marital Status"
            value={data.maritalStatus}
            disabled
          />
        </form>
      </div>
      <div className="flex justify-between items-center">
        <button className="btn btn-default">Back</button>
        <button className="btn btn-primary">Next</button>
      </div>
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
      },
    },
  }
}
