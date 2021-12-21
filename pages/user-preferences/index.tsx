import { useRouter } from 'next/router'
import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { UserPreferences } from '../../components/Layout/UserPreferences'
import { NavButtons } from '../../components/NavButtons'
import TimezonePicker from 'react-bootstrap-timezone-picker'
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css'

export default function Index({ data }) {
  const router = useRouter()
  const userData = router.query.id
  const userPref = data.userPref

  const [timezone, setTimezone] = useState(
    userPref && userPref.timeZoneCode
      ? userPref.timeZoneCode
      : Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  const changeTimezoneHandler = (timezone) => {
    setTimezone(timezone)
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

  return (
    <Layout data={data} title="User Preferences">
      <UserPreferences />
      <div className="grid grid-cols-2 mb-14">
        <form noValidate>
          <fieldset className="fieldset">
            <legend>
              <h4 className="h4 mb-4">User Preferences</h4>
            </legend>
            <section>
              <label>What is your preferred website browsing language?</label>
              <br></br>
              <input
                type="radio"
                id="webLanguage1"
                name="webLanguage"
                value="1"
                checked={webLanguageCode == 1}
                onChange={onWebLanguageChanged}
                className="ml-4"
                disabled
              />
              <span> English</span>
              <input
                type="radio"
                id="webLanguage2"
                value="2"
                checked={webLanguageCode == 2}
                onChange={onWebLanguageChanged}
                name="webLanguage"
                className="ml-8"
                disabled
              />
              <span> French</span>
            </section>

            <section>
              <label htmlFor="webLanguage">
                What is your preferred language for communication?
              </label>
              <br></br>
              <input
                type="radio"
                id="correspondenceLanguage1"
                name="correspondenceLanguage"
                value="1"
                checked={correspondenceLanguageCode == 1}
                onChange={onCorrespondenceLanguageCodeChanged}
                className="ml-4"
                disabled
              />
              <span> English</span>
              <input
                type="radio"
                id="correspondenceLanguage2"
                value="2"
                checked={correspondenceLanguageCode == 2}
                onChange={onCorrespondenceLanguageCodeChanged}
                name="correspondenceLanguage"
                className="ml-8"
                disabled
              />
              <span> French</span>
            </section>
            <section>
              <label htmlFor="brailleTtyKeyboard">
                Do you use braille display/TTY keyboard?
              </label>
              <br></br>
              <input
                type="radio"
                id="brailleTtyKeyboard1"
                name="brailleTtyKeyboard"
                value="1"
                checked={brailleTtyKeyboard == 1}
                onChange={onBrailleTtyKeyboardChanged}
                className="ml-4"
                disabled
              />
              <span> Yes</span>
              <input
                type="radio"
                id="brailleTtyKeyboard2"
                value="0"
                checked={brailleTtyKeyboard == 0}
                onChange={onBrailleTtyKeyboardChanged}
                name="brailleTtyKeyboard"
                className="ml-14"
                disabled
              />
              <span> No</span>
            </section>
            <section>
              <label htmlFor="currency">
                What financial currency do you prefer?
              </label>
              <br></br>
              <input
                type="radio"
                id="currency1"
                name="currency"
                value="1"
                checked={preferredCurrencyCode == 1}
                onChange={onPreferredCurrencyCodeChanged}
                className="ml-4"
                disabled
              />
              <span> CAD</span>
              <input
                type="radio"
                id="currency2"
                value="2"
                checked={preferredCurrencyCode == 2}
                onChange={onPreferredCurrencyCodeChanged}
                name="currency"
                className="ml-12"
                disabled
              />
              <span> USD</span>
            </section>
            <section>
              <label htmlFor="timeFormat">
                What time format do you prefer?
              </label>
              <br></br>
              <input
                type="radio"
                id="timeFormat12"
                name="timeFormat"
                value="1"
                checked={timeFormatCode == 1}
                onChange={onTimeFormatCodeChanged}
                className="ml-4"
                disabled
              />
              <span> 12-Hour</span>
              <input
                type="radio"
                id="timeFormat24"
                value="2"
                checked={timeFormatCode == 2}
                onChange={onTimeFormatCodeChanged}
                name="timeFormat"
                className="ml-6"
                disabled
              />
              <span> 24-Hour</span>
            </section>
            <section>
              <label htmlFor="timeZone">What time zone are you in?</label>
              <br></br>
              <TimezonePicker
                absolute={false}
                placeholder="Select a timezone..."
                value={timezone}
                onChange={changeTimezoneHandler}
                disabled
              />
            </section>
          </fieldset>
        </form>
      </div>
      <NavButtons
        fromLocation={`/contact-info?id=${userData}`}
        toLocation={`/user-preferences?id=${userData}`}
      />
    </Layout>
  )
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.API_SERVER_BASE_URL}/user/pref/${_context.query.id}`
  )
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}
