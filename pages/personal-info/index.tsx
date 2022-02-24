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
        <script
          dangerouslySetInnerHTML={{
            __html: `var adobeDataLayer = [];
              adobeDataLayer.push({
                "event": "pageLoad",
                "page": {
                    "title": "eng-profile management-personal information",
                    "language": "eng",
                    "creator": "Employment and Social Development Canada",
                    "accessRights": "2",
                    "service": " ESDC-EDSC_ProfileManagement -EstimateurDePrestationsDeVieillesse"
                }
            });
            `,
          }}
        />
        <script src="https://assets.adobedtm.com/be5dfd287373/0127575cd23a/launch-913b1beddf7a-staging.min.js"></script>
      </Head>
      <Layout data={data} title="Personal Information">
        <form
          action="#"
          onSubmit={(e) => alert('submitted data: ' + e.target[0].value)}
        >
          <div className="flex-auto sm:w-2/3 md:max-w-xl lg:w-1/2 ml-2">
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
              value={data.dob.substring(0, 10)}
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
        </form>

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
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/personal/Info/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
