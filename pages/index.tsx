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
  // data.forEach((user: { _id: any; lastName: string; firstName: string }) => {
  //   users.push({
  //     value: user._id,
  //     label: user.lastName + ', ' + user.firstName,
  //   })
  // })

  users.push({
    value: '6202d982117bd25b6b4284b6',
    label: 'White , George',
  })

  return {
    props: {
      data: users,
    },
  }
}
