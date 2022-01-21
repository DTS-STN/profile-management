import { Input } from '../../components/Forms/Input'
import { Layout } from '../../components/Layout'
import Head from 'next/head'
import { NavButtons } from '../../components/NavButtons'
import { useRouter } from 'next/router'

export default function Home({ data }) {
  const router = useRouter()
  const userData = router.query.id

  return (
    <div>
      <Head>
        <title>Personal Information</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout data={data} title="Personal Information">
        <form
          action="#"
          onSubmit={(e) => alert('submitted data: ' + e.target[0].value)}
        >
          <fieldset className="fieldset">
            <legend>
              <h4 className="h4 mb-4">Personal Information</h4>
            </legend>
            <div className="w-1/2 mb-14">
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
                value={data.sinNumber}
                disabled
              />
              <Input
                type="text"
                name="married"
                label="Marital Status"
                value={data.maritalStatusCode == 1 ? 'Single' : 'Married'}
                disabled
              />
            </div>
          </fieldset>
        </form>
        <br />
        <NavButtons
          fromLocation="/"
          toLocation={`/financial-info?id=${userData}`}
        />
      </Layout>
    </div>
  )
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.API_SERVER_BASE_URL}/user/personal/Info/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
