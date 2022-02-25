import { useRouter } from 'next/router'
import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { NavButtons } from '../../components/NavButtons'
import TimezonePicker from 'react-bootstrap-timezone-picker'
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css'
import { ErrorLabel } from '../../components/Forms/validation/ErrorLabel'
import { SubmitMessage } from '../../components/Forms/validation/SubmitMessage'
import { useInternationalization } from '../../components/Hooks'
import { UserPreferences } from '../../components/Layout/UserPreferences'
import Head from 'next/head'

export const CommonUserPreferences: React.FC<{
  data: any
  isDisabled?: boolean
}> = ({ data, isDisabled }) => {
  const router = useRouter()
  const userData = router.query.id

  const submitErrorMsg = useInternationalization('submitError')

  const [loading, setLoading] = useState<boolean>(false)

  const [infoMessage, setInfoMessage] = useState<string>(undefined)
  const [errorMessage, setErrorMessage] = useState<string>(undefined)

  const [userPref, setUserPref] = useState(
    data.userPref ? data.userPref : undefined
  )

  const [webLanguageCodeError, setWebLanguageCodeError] =
    useState<string>(undefined)
  const [correspondenceLanguageCodeError, setCorrespondenceLanguageCodeError] =
    useState<string>(undefined)
  const [brailleTtyKeyboardError, setBrailleTtyKeyboardError] =
    useState<string>(undefined)
  const [preferredCurrencyCodeError, setPreferredCurrencyCodeError] =
    useState<string>(undefined)
  const [timeFormatCodeError, setTimeFormatCodeError] =
    useState<string>(undefined)
  const [timezoneError, setTimezoneError] = useState<string>(undefined)

  const [timeZoneCode, setTimeZoneCode] = useState(
    userPref && userPref.timeZoneCode
      ? userPref.timeZoneCode
      : Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  const changeTimezoneHandler = (timeZoneCode) => {
    setTimeZoneCode(timeZoneCode)
  }

  const [webLanguageCode, setWebLanguageCode] = useState<number>(
    userPref ? userPref.webLanguageCode : ''
  )
  const onWebLanguageChanged = (webLanguageCode) => {
    setWebLanguageCode(webLanguageCode.target.value)
  }

  const [correspondenceLanguageCode, setCorrespondenceLanguageCode] =
    useState<number>(userPref ? userPref.correspondenceLanguageCode : '')

  const onCorrespondenceLanguageCodeChanged = (correspondenceLanguageCode) => {
    setCorrespondenceLanguageCode(correspondenceLanguageCode.target.value)
  }

  const [brailleTtyKeyboard, setBrailleTtyKeyboard] = useState<number>(
    userPref && userPref.brailleTtyKeyboard == true
      ? 1
      : userPref && userPref.brailleTtyKeyboard == false
      ? 0
      : null
  )

  const onBrailleTtyKeyboardChanged = (brailleTtyKeyboard) => {
    setBrailleTtyKeyboard(brailleTtyKeyboard.target.value)
  }

  const [preferredCurrencyCode, setPreferredCurrencyCode] = useState<number>(
    userPref ? userPref.preferredCurrencyCode : ''
  )

  const onPreferredCurrencyCodeChanged = (preferredCurrencyCode) => {
    setPreferredCurrencyCode(preferredCurrencyCode.target.value)
  }

  const [timeFormatCode, setTimeFormatCode] = useState<number>(
    userPref ? userPref.timeFormatCode : ''
  )

  const onTimeFormatCodeChanged = (timeFormatCode) => {
    setTimeFormatCode(timeFormatCode.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      setLoading(true)

      setWebLanguageCodeError(undefined)
      setCorrespondenceLanguageCodeError(undefined)
      setBrailleTtyKeyboardError(undefined)
      setPreferredCurrencyCodeError(undefined)
      setTimeFormatCodeError(undefined)
      setTimezoneError(undefined)
      setInfoMessage(undefined)
      setErrorMessage(undefined)

      const formData = {
        webLanguageCode,
        correspondenceLanguageCode,
        brailleTtyKeyboard:
          brailleTtyKeyboard == 1
            ? true
            : brailleTtyKeyboard == 0
            ? false
            : null,
        preferredCurrencyCode,
        timeFormatCode,
        timeZoneCode,
      }
      fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user/pref/${userData}`, {
        method: !userPref ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.code > 201) {
            setErrorMessage(submitErrorMsg)
          }
          const messages = json.message.split(',')
          messages.forEach((msg) => {
            if (msg.includes('Web language')) {
              setWebLanguageCodeError(msg)
            } else if (msg.includes('Communication language')) {
              setCorrespondenceLanguageCodeError(msg)
            } else if (msg.includes('Braille/TTY')) {
              setBrailleTtyKeyboardError(msg)
            } else if (msg.includes('Preferred Currency')) {
              setPreferredCurrencyCodeError(msg)
            } else if (msg.includes('Time Format Code')) {
              setTimeFormatCodeError(msg)
            } else if (msg.includes('Time Zone')) {
              setTimezoneError(msg)
            } else {
              setInfoMessage(msg)
              if (json.status < 300) {
                setUserPref(json.data)
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
        <title>User Preferences</title>
        <script src="https://assets.adobedtm.com/be5dfd287373/0127575cd23a/launch-913b1beddf7a-staging.min.js"></script>
      </Head>
      <Layout data={data} title="User Preferences">
        {isDisabled ? (
          <UserPreferences active={false} />
        ) : (
          <UserPreferences active={true} />
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex-auto sm:w-2/3 md:max-w-xl lg:w-1/2 ml-2">
            <section>
              {correspondenceLanguageCodeError ? (
                <ErrorLabel errorMessage={webLanguageCodeError} />
              ) : (
                ''
              )}
              <label>What is your preferred website browsing language?</label>
              <ul>
                <li>
                  <input
                    type="radio"
                    id="webLanguage1"
                    name="webLanguage"
                    value="1"
                    checked={webLanguageCode == 1}
                    onChange={onWebLanguageChanged}
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> English</span>
                </li>
                <li>
                  <input
                    type="radio"
                    id="webLanguage2"
                    value="2"
                    checked={webLanguageCode == 2}
                    onChange={onWebLanguageChanged}
                    name="webLanguage"
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> French</span>
                </li>
              </ul>
            </section>

            <section className="mt-4">
              {correspondenceLanguageCodeError ? (
                <ErrorLabel errorMessage={correspondenceLanguageCodeError} />
              ) : (
                ''
              )}
              <label htmlFor="webLanguage">
                What is your preferred language for communication?
              </label>
              <ul>
                <li>
                  <input
                    type="radio"
                    id="correspondenceLanguage1"
                    name="correspondenceLanguage"
                    value="1"
                    checked={correspondenceLanguageCode == 1}
                    onChange={onCorrespondenceLanguageCodeChanged}
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> English</span>
                </li>
                <li>
                  <input
                    type="radio"
                    id="correspondenceLanguage2"
                    value="2"
                    checked={correspondenceLanguageCode == 2}
                    onChange={onCorrespondenceLanguageCodeChanged}
                    name="correspondenceLanguage"
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> French</span>
                </li>
              </ul>
            </section>
            <section className="mt-4">
              {brailleTtyKeyboardError ? (
                <ErrorLabel errorMessage={brailleTtyKeyboardError} />
              ) : (
                ''
              )}
              <label htmlFor="brailleTtyKeyboard">
                Do you use braille display/TTY keyboard?
              </label>
              <ul>
                <li>
                  <input
                    type="radio"
                    id="brailleTtyKeyboard1"
                    name="brailleTtyKeyboard"
                    value="1"
                    checked={brailleTtyKeyboard == 1}
                    onChange={onBrailleTtyKeyboardChanged}
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> Yes</span>
                </li>
                <li>
                  <input
                    type="radio"
                    id="brailleTtyKeyboard2"
                    value="0"
                    checked={brailleTtyKeyboard == 0}
                    onChange={onBrailleTtyKeyboardChanged}
                    name="brailleTtyKeyboard"
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> No</span>
                </li>
              </ul>
            </section>
            <section className="mt-4">
              {preferredCurrencyCodeError ? (
                <ErrorLabel errorMessage={preferredCurrencyCodeError} />
              ) : (
                ''
              )}
              <label htmlFor="currency">
                What financial currency do you prefer?
              </label>
              <ul>
                <li>
                  <input
                    type="radio"
                    id="currency1"
                    name="currency"
                    value="1"
                    checked={preferredCurrencyCode == 1}
                    onChange={onPreferredCurrencyCodeChanged}
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> CAD</span>
                </li>
                <li>
                  <input
                    type="radio"
                    id="currency2"
                    value="2"
                    checked={preferredCurrencyCode == 2}
                    onChange={onPreferredCurrencyCodeChanged}
                    name="currency"
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> USD</span>
                </li>
              </ul>
            </section>
            <section className="mt-4">
              {timeFormatCodeError ? (
                <ErrorLabel errorMessage={timeFormatCodeError} />
              ) : (
                ''
              )}
              <label htmlFor="timeFormat">
                What time format do you prefer?
              </label>
              <ul>
                <li>
                  <input
                    type="radio"
                    id="timeFormat12"
                    name="timeFormat"
                    value="1"
                    checked={timeFormatCode == 1}
                    onChange={onTimeFormatCodeChanged}
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> 12-Hour</span>
                </li>
                <li>
                  <input
                    type="radio"
                    id="timeFormat24"
                    value="2"
                    checked={timeFormatCode == 2}
                    onChange={onTimeFormatCodeChanged}
                    name="timeFormat"
                    className="ml-4 radiobutton"
                    disabled={isDisabled}
                  />
                  <span> 24-Hour</span>
                </li>
              </ul>
            </section>
            <section className="mt-4">
              {timezoneError ? <ErrorLabel errorMessage={timezoneError} /> : ''}
              <label htmlFor="timeZone">What time zone are you in?</label>
              <div>
                <TimezonePicker
                  absolute={false}
                  placeholder="Select a timezone..."
                  value={timeZoneCode}
                  onChange={changeTimezoneHandler}
                  disabled={isDisabled}
                />
              </div>
            </section>
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
              <div className="flex justify-between items-center mt-2">
                <input
                  type="submit"
                  className="btn btn-primary mr-4"
                  value="Save"
                  disabled={loading && true}
                />
              </div>
            )}
          </div>
        </form>

        <NavButtons
          fromLocation={`/contact-info?id=${userData}`}
          toLocation={`/user-preferences?id=${userData}`}
        />
      </Layout>
      <script src="/scripts/adobe.js"></script>
      <script type="text/javascript">_satellite.pageBottom()</script>
    </div>
  )
}
