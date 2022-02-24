import Select from 'react-select'
import { Layout } from '../components/Layout'
import Head from 'next/head'
import { NavButtons } from '../components/NavButtons'
import { useState } from 'react'
import { useStorage } from '../components/Hooks'

export default function Home({ data }) {
  const [userData, setUserData] = useState(undefined)

  return (
    <div>
      <Head>
        <title>User List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var adobeDataLayer = [];
              adobeDataLayer.push({
                "event": "pageLoad",
                "page": {
                    "title": "eng-profile management-user list",
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
      <Layout data={data} title="User list">
        <div className="grid grid-cols-2 mb-14">
          <form>
            <fieldset className="fieldset">
              <legend>
                <h4 className="h4 mb-4">User List</h4>
              </legend>
              <div className="w-1/2 mb-14">
                <Select
                  options={data}
                  isClearable
                  placeholder="Select a user"
                  onChange={(e: { value: string; label: string }) => {
                    setUserData(e != null ? e.value : undefined)
                  }}
                />
              </div>
            </fieldset>
          </form>
        </div>

        <NavButtons
          fromLocation="#"
          toLocation={userData ? `/personal-info?id=${userData}` : '/'}
        />
      </Layout>
    </div>
  )
}

export const getServerSideProps = async (_context: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/personal/Info/`
  )
  const data = await res.json()

  let users = []

  data.forEach((user: { _id: any; lastName: string; firstName: string }) => {
    users.push({
      value: user._id,
      label: user.lastName + ', ' + user.firstName,
    })
  })

  return {
    props: {
      data: users,
    },
  }
}
