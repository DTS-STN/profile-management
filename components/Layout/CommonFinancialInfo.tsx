import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Input } from '../../components/Forms/Input'
import { SubmitMessage } from '../../components/Forms/validation/SubmitMessage'
import { useInternationalization } from '../../components/Hooks'
import { Layout } from '../../components/Layout'
import { FinancialInfo } from '../../components/Layout/FinancialInfo'
import { NavButtons } from '../../components/NavButtons'
import Head from 'next/head'

export const CommonFinancialInfo: React.FC<{
  data: any
  isDisabled?: boolean
}> = ({ data, isDisabled }) => {
  const router = useRouter()
  const userData = router.query.id

  const [financialInfo, setFinancialInfo] = useState(
    data.userFinancialInfo != null ? data.userFinancialInfo : undefined
  )

  const [institutionNumberError, setInstitutionNumberError] =
    useState<string>(undefined)
  const [branchNumberError, setBranchNumberError] = useState<string>(undefined)
  const [accountNumberError, setAccountNumberError] =
    useState<string>(undefined)

  const [loading, setLoading] = useState<boolean>(false)
  const [infoMessage, setInfoMessage] = useState<string>(undefined)
  const [errorMessage, setErrorMessage] = useState<string>(undefined)

  const [branchNumber, setBranchNumber] = useState<string>(
    financialInfo ? financialInfo.transitNumber : ''
  )
  const [institutionNumber, setInstitutionNumber] = useState<string>(
    financialInfo ? financialInfo.institutionNumber : ''
  )
  const [accountNumber, setAccountNumber] = useState<string>(
    financialInfo ? financialInfo.accountNumber : ''
  )

  const branch = useInternationalization('branch')
  const institution = useInternationalization('institution')
  const account = useInternationalization('account')
  const submitErrorMsg = useInternationalization('submitError')

  const handleReset = async (e) => {
    e.preventDefault()
    if (
      confirm(
        'You are about to reset your account details with Service Canada, are you sure you want to take this action?'
      )
    ) {
      // send reset api request and set loading state

      // set form state
      setBranchNumber('')
      setInstitutionNumber('')
      setAccountNumber('')
    }
  }

  const handleSubmit = async (e) => {
    console.log('submitting...')
    e.preventDefault()
    e.stopPropagation()
    try {
      setLoading(true)

      const formData = {
        institutionNumber: institutionNumber,
        transitNumber: branchNumber,
        accountNumber: accountNumber,
      }

      setBranchNumberError(undefined)
      setAccountNumberError(undefined)
      setInstitutionNumberError(undefined)

      setInfoMessage(undefined)
      setErrorMessage(undefined)
      console.log(userData)
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/financial/info/${userData}`,
        {
          method: !financialInfo ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.code > 201) {
            setErrorMessage(submitErrorMsg)
          }

          const messages = json.message.split(',')

          messages.forEach((msg) => {
            if (msg.includes('Branch')) {
              setBranchNumberError(msg)
            } else if (msg.includes('Account Number')) {
              setAccountNumberError(msg)
            } else if (msg.includes('Institution Number')) {
              setInstitutionNumberError(msg)
            } else {
              setInfoMessage(msg)
              if (json.status < 300) {
                setFinancialInfo(json.data)
              }
            }
          })
        })

      //if you want the error to go away after 5s, just setTimeout for 5s and clear the error fields
    } catch (error) {
      setLoading(false)
      console.log('An error occurred while submitting the form.' + error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <Head>
        <title>Financial Information</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://assets.adobedtm.com/be5dfd287373/0127575cd23a/launch-913b1beddf7a-staging.min.js"></script>
      </Head>
      <Layout data={data} title="Financial Information">
        {isDisabled ? (
          <FinancialInfo active={false} />
        ) : (
          <FinancialInfo active={true} />
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="flex-auto sm:w-2/3 md:max-w-xl lg:w-1/2 ml-2">
            <Input
              type="text"
              name="branchNumber"
              label={branch}
              value={branchNumber}
              onChange={(e) => setBranchNumber(e.target.value)}
              disabled={isDisabled}
              maxLength={5}
              minLength={5}
              placeholder="Enter Branch Number"
              error={branchNumberError}
              required
              autoFocus
            />
            <Input
              type="text"
              name="institutionNumber"
              label={institution}
              value={institutionNumber}
              onChange={(e) => setInstitutionNumber(e.target.value)}
              disabled={isDisabled}
              maxLength={3}
              minLength={3}
              placeholder="Enter Financial Institution Number"
              error={institutionNumberError}
              required
            />
            <Input
              type="text"
              name="accountNumber"
              label={account}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              disabled={isDisabled}
              maxLength={13}
              minLength={9}
              placeholder="Enter Account Number"
              error={accountNumberError}
              required
            />
            <SubmitMessage
              messageType={infoMessage !== undefined ? 'success' : ''}
              message={infoMessage}
            />
            <SubmitMessage
              messageType={errorMessage !== undefined ? 'error' : ''}
              message={errorMessage}
            />

            {isDisabled ? (
              ''
            ) : (
              <div className="justify-between max-w-xl lg:w-1/2 ml-2 mt-2">
                <input
                  type="submit"
                  className="btn btn-primary mr-4"
                  value="Save"
                  disabled={isDisabled}
                />
                <input
                  type="reset"
                  className="btn btn-default"
                  value="Clear all"
                  onClick={handleReset}
                  disabled={isDisabled}
                />
              </div>
            )}
          </div>
        </form>

        <NavButtons
          fromLocation={`/personal-info?id=${userData}`}
          toLocation={`/contact-info?id=${userData}`}
        />
      </Layout>
    </div>
  )
}
