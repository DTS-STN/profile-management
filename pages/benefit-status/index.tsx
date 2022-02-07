import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { BenefitInfo } from '../../components/Layout/BenefitInfo'
import { Alert } from '../../components/Alert'
import { AlertType } from '../../components/Alert/enums'
import Head from 'next/dist/shared/lib/head'

export default function Index({ data }) {
  const router = useRouter()
  const userData = router.query.id

  const [benefits, setBenefits] = useState(
    data.benefitInfo != null ? data.benefitInfo.benefits : undefined
  )
  const renderTable = () => {
    return (
      <table className="w-full text-center">
        <thead className="border-b border-t bg-[#ccc] font-semibold  text-top border-content text-content">
          <tr>
            <th className="text-sm  text-gray-900 px-6 py-2 border-r border-l">
              OAS Application Status
            </th>
            <th className="text-sm text-gray-900 px-6 py-2 border-r">
              Payment Date
            </th>
            <th className="text-sm text-gray-900 px-6 py-2 border-r">
              Payment Amount (CAD)
            </th>
          </tr>
        </thead>
        <tbody>{renderTableDataRows()}</tbody>
      </table>
    )
  }
  const renderTableDataRows = () => {
    return benefits.map((benefit, index) => {
      const { applicationStatus, paymentDate, paymentAmount } = benefit
      return (
        <tr className="border-b odd:bg-white even:bg-[#F0F0F0] hover:bg-[#CCCCCC]">
          <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-l">
            {applicationStatus}
          </td>
          <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
            {paymentDate}
          </td>
          <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
            {paymentAmount ? '$' + paymentAmount : 'N/A'}
          </td>
        </tr>
      )
    })
  }

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout data={data} title="Current Benefits Status">
        <BenefitInfo active={false} />
        <div>
          {benefits && benefits.length > 0 ? (
            <div>
              <h6 className="h6 mb-1">OAS:</h6>
              {renderTable()}
            </div>
          ) : (
            <Alert
              id="benefit-info"
              title="OAS Benefit"
              type={AlertType.WARNING}
              insertHTML
              children={
                'No Benefits applications have been made on your behalf.'
              }
            />
          )}
        </div>

        <NavButtons
          fromLocation={userData ? `/user-preferences?id=${userData}` : '/'}
          toLocation="#"
        />
      </Layout>
    </div>
  )
}

export const getServerSideProps = async (_context: any) => {
  const benefits = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/benefit/Info/${_context.query.id}`
  )
  const data = await benefits.json()

  return {
    props: {
      data: data,
    },
  }
}
