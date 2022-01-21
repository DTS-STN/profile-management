import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Input } from '../../components/Forms/Input'
import Select from 'react-select'
import { NavButtons } from '../../components/NavButtons'
import { useRouter } from 'next/router'
import countryList from 'react-select-country-list'
import { ErrorLabel } from '../../components/Forms/validation/ErrorLabel'
import { SubmitMessage } from '../../components/Forms/validation/SubmitMessage'
import { useInternationalization } from '../../components/Hooks'
import { ContactInfo } from '../../components/Layout/ContactInfo'

const RESIDENTIAL_ADDRESS = 1
const MAILING_ADDRESS = 2

export const CommonContactInfo: React.FC<{ data: any; isDisabled?: boolean }> =
  ({ data, isDisabled }) => {
    const router = useRouter()
    const userData = router.query.id

    const [contactInfo, setContactInfo] = useState(
      data.userContact ? data.userContact : undefined
    )

    const submitErrorMsg = useInternationalization('submitError')

    const [hasDifferentMailing, setHasDifferentMailing] = useState(
      contactInfo
        ? contactInfo.userAddresses && contactInfo.userAddresses.length > 1
        : false
    )

    const [steetNumberError, setSteetNumberError] = useState<string>(undefined)
    const [steetNameError, setStreetNameError] = useState<string>(undefined)
    const [aptNumberError, setAptNumberError] = useState<string>(undefined)
    const [postalCodeError, setPostalCodeError] = useState<string>(undefined)
    const [cityError, setCityError] = useState<string>(undefined)
    const [emailError, setEmailError] = useState<string>(undefined)
    const [phoneError, setPhoneError] = useState<string>(undefined)
    const [countryError, setCountryError] = useState<string>(undefined)

    const [infoMessage, setInfoMessage] = useState<string>(undefined)
    const [errorMessage, setErrorMessage] = useState<string>(undefined)

    const [loading, setLoading] = useState<boolean>(false)

    const options = [
      { value: 'CA', label: 'Canada' },
      { value: 'OT', label: 'Other' },
    ] //countryList().getData()

    const changeCountryHandler = (country) => {
      setCountry(country === null ? '' : country.value)
    }

    const changeCountryMailingHandler = (countryMailing) => {
      setCountryMailing(countryMailing === null ? '' : countryMailing.value)
    }

    const [email, setEmail] = useState<string>(
      contactInfo ? contactInfo.email : ''
    )
    const [phone, setPhone] = useState<string>(
      contactInfo ? contactInfo.phone : ''
    )

    const [streetNumber, setStreetNumber] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 0
        ? contactInfo.userAddresses[0].streetNumber
        : ''
    )
    const [aptNumber, setAptNumber] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 0
        ? contactInfo.userAddresses[0].aptNumber
        : ''
    )
    const [streetName, setStreetName] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 0
        ? contactInfo.userAddresses[0].streetName
        : ''
    )
    const [postalCode, setPostalCode] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 0
        ? contactInfo.userAddresses[0].postalCode
        : ''
    )
    const [city, setCity] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 0
        ? contactInfo.userAddresses[0].city
        : ''
    )

    const [country, setCountry] = useState(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 0
        ? contactInfo.userAddresses[0].countryCode
        : ''
    )

    const [addressTypeCode, setAddressTypeCode] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 0
        ? contactInfo.userAddresses[0].addressTypeCode
        : ''
    )

    const [streetNumberMailing, setStreetNumberMailing] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 1
        ? contactInfo.userAddresses[1].streetNumber
        : ''
    )
    const [aptNumberMailing, setAptNumberMailing] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 1
        ? contactInfo.userAddresses[1].aptNumber
        : ''
    )
    const [streetNameMailing, setStreetNameMailing] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 1
        ? contactInfo.userAddresses[1].streetName
        : ''
    )
    const [postalCodeMailing, setPostalCodeMailing] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 1
        ? contactInfo.userAddresses[1].postalCode
        : ''
    )
    const [cityMailing, setCityMailing] = useState<string>(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 1
        ? contactInfo.userAddresses[1].city
        : ''
    )
    const [countryMailing, setCountryMailing] = useState(
      contactInfo &&
        contactInfo.userAddresses &&
        contactInfo.userAddresses.length > 1
        ? contactInfo.userAddresses[1].countryCode
        : ''
    )
    const [addressTypeCodeMailing, setAddressTypeCodeMailing] =
      useState<string>(
        contactInfo &&
          contactInfo.userAddresses &&
          contactInfo.userAddresses.length > 1
          ? contactInfo.userAddresses[1].addressTypeCode
          : ''
      )
    const handleReset = async (e) => {
      e.preventDefault()
      if (
        confirm(
          'You are about to reset your contact details with Service Canada, are you sure you want to take this action?'
        )
      ) {
        setEmail('')
        setPhone('')
        setStreetNumber('')
        setStreetName('')
        setAptNumber('')
        setCity('')
        setPostalCode('')
        setCountry('')
        setStreetNumberMailing('')
        setStreetNameMailing('')
        setAptNumberMailing('')
        setCityMailing('')
        setPostalCodeMailing('')
        setCountryMailing('')
        setInfoMessage(undefined)
      }
    }

    const refreshMailingAddressData = (hasDifferentMailing) => {
      if (hasDifferentMailing) {
        console.log(contactInfo)
        if (
          contactInfo.userAddresses &&
          contactInfo.userAddresses.length > 1 &&
          contactInfo.userAddresses[1].expiryDate == null
        ) {
          setStreetNumberMailing(contactInfo.userAddresses[1].streetNumber)
          setStreetNameMailing(contactInfo.userAddresses[1].streetName)
          setAptNumberMailing(contactInfo.userAddresses[1].aptNumber)
          setCityMailing(contactInfo.userAddresses[1].city)
          setPostalCodeMailing(contactInfo.userAddresses[1].postalCode)
          setCountryMailing(contactInfo.userAddresses[1].countryCode)
        } else {
          setStreetNumberMailing('')
          setStreetNameMailing('')
          setAptNumberMailing('')
          setCityMailing('')
          setPostalCodeMailing('')
          setCountryMailing('')
        }
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      e.stopPropagation()
      try {
        setLoading(true)
        const formData = {
          email: email,
          phone: phone,
          userAddresses: hasDifferentMailing //||
            ? // (contactInfo &&
              //   contactInfo.userAddresses &&
              //   contactInfo.userAddresses.length > 1)
              [
                {
                  streetNumber,
                  streetName,
                  aptNumber: aptNumber ? aptNumber : null,
                  postalCode,
                  city,
                  countryCode: country,
                  addressTypeCode: RESIDENTIAL_ADDRESS,
                  expiryDate: null,
                },
                {
                  streetNumber: streetNumberMailing,
                  streetName: streetNameMailing,
                  aptNumber: aptNumberMailing ? aptNumberMailing : null,
                  postalCode: postalCodeMailing,
                  city: cityMailing,
                  countryCode: countryMailing,
                  addressTypeCode: MAILING_ADDRESS,
                  expiryDate: hasDifferentMailing
                    ? null
                    : new Date().toLocaleString(),
                },
              ]
            : [
                {
                  streetNumber,
                  streetName,
                  aptNumber: aptNumber ? aptNumber : null,
                  postalCode,
                  city,
                  countryCode: country,
                  addressTypeCode: RESIDENTIAL_ADDRESS,
                  expiryDate: null,
                },
              ],
        }

        setSteetNumberError(undefined)
        setStreetNameError(undefined)
        setAptNumberError(undefined)
        setPostalCodeError(undefined)
        setCityError(undefined)
        setCountryError(undefined)
        setEmailError(undefined)
        setPhoneError(undefined)
        setInfoMessage(undefined)
        setErrorMessage(undefined)

        fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/contact/info/${userData}`,
          {
            method: !contactInfo ? 'POST' : 'PUT',
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
              ? json.message.split(',')
              : json.message
            messages.forEach((msg) => {
              if (msg.includes('Street Name')) {
                setStreetNameError(msg)
              } else if (msg.includes('Street Number')) {
                setSteetNumberError(msg)
              } else if (msg.includes('Apartment Number')) {
                setAptNumberError(msg)
              } else if (msg.includes('City')) {
                setCityError(msg)
              } else if (msg.includes('Postal')) {
                setPostalCodeError(msg)
              } else if (msg.includes('Email')) {
                setEmailError(msg)
              } else if (msg.includes('Phone')) {
                setPhoneError(msg)
              } else if (msg.includes('Country')) {
                setCountryError(msg)
              } else {
                setInfoMessage(msg)
                if (json.status < 300) {
                  setContactInfo(json.data)
                }
              }
            })
          })

        //if you want the error to go away after 5s, just setTimeout for 5s and clear the error fields
      } catch (error) {
        setLoading(false)
        console.log('An error occurred while submitting the form.' + error)
        setErrorMessage(error)
      } finally {
        setLoading(false)
      }
    }
    return (
      <Layout data={data} title="Contact Information">
        {isDisabled ? <ContactInfo /> : ''}
        <form onSubmit={handleSubmit} noValidate>
          <fieldset className="fieldset">
            <legend>
              <h4 className="h3 mb-4">Contact Information</h4>
            </legend>
            <div className="w-1/2 mb-14">
              <fieldset className="fieldset-small">
                <legend>
                  <h4 className="h5 mb-8">Residential Address</h4>
                </legend>
                <Input
                  type="text"
                  name="streetNumber"
                  label="Street Number"
                  error={steetNumberError}
                  value={streetNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                  placeholder="Enter Street Number"
                  required
                  autoFocus
                  disabled={isDisabled}
                />
                <Input
                  type="text"
                  name="streetName"
                  label="Street Name"
                  error={steetNameError}
                  value={streetName}
                  onChange={(e) => setStreetName(e.target.value)}
                  placeholder="Enter Street Name"
                  required
                  disabled={isDisabled}
                />
                <Input
                  type="text"
                  name="aptNumber"
                  label="Apt Number"
                  error={aptNumberError}
                  value={aptNumber}
                  onChange={(e) => setAptNumber(e.target.value)}
                  placeholder="Enter Apartment Number"
                  disabled={isDisabled}
                />
                <Input
                  type="text"
                  name="postalCode"
                  label="Postal Code"
                  error={postalCodeError}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Enter Postal Code"
                  required
                  disabled={isDisabled}
                />
                <Input
                  type="text"
                  name="city"
                  label="City"
                  error={cityError}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City"
                  required
                  disabled={isDisabled}
                />
                <section>
                  {countryError ? (
                    <ErrorLabel errorMessage={countryError} />
                  ) : (
                    ''
                  )}
                  <label>
                    <span className="text-danger">*</span> Country
                    <span className="text-danger"> (required)</span>
                  </label>
                  <Select
                    name="country"
                    options={options}
                    value={options.filter((option) => option.value === country)}
                    onChange={changeCountryHandler}
                    isClearable
                    isDisabled={isDisabled}
                    placeholder="Select your country of residence"
                  />
                </section>
              </fieldset>
              <br></br>
              <section>
                <label htmlFor="mailing">
                  <input
                    type="checkbox"
                    id="mailing"
                    className="ml-2 rounded"
                    checked={!hasDifferentMailing}
                    disabled={isDisabled}
                    onChange={(e) => {
                      refreshMailingAddressData(!e.target.checked)
                      setHasDifferentMailing(!e.target.checked)
                    }}
                  />
                  <span> Mailing Address is same as residential Address?</span>
                </label>
              </section>
              <br></br>
              {hasDifferentMailing ? (
                <div>
                  <fieldset className="fieldset-small">
                    <legend>
                      <h4 className="h5 mb-8">Mailing Address</h4>
                    </legend>
                    <Input
                      type="text"
                      name="streetNumberMailing"
                      label="Street Number"
                      error={steetNumberError}
                      value={streetNumberMailing}
                      onChange={(e) => setStreetNumberMailing(e.target.value)}
                      placeholder="Enter Street Number"
                      required
                      disabled={isDisabled}
                    />
                    <Input
                      type="text"
                      name="streetNameMailing"
                      label="Street Name"
                      error={steetNameError}
                      value={streetNameMailing}
                      onChange={(e) => setStreetNameMailing(e.target.value)}
                      placeholder="Enter Street Name"
                      required
                      disabled={isDisabled}
                    />
                    <Input
                      type="text"
                      name="aptNumberMailing"
                      label="Apt Number"
                      error={aptNumberError}
                      value={aptNumberMailing}
                      onChange={(e) => setAptNumberMailing(e.target.value)}
                      placeholder="Enter Apartment Number"
                      disabled={isDisabled}
                    />
                    <Input
                      type="text"
                      name="postalCodeMailing"
                      label="Postal Code"
                      error={postalCodeError}
                      value={postalCodeMailing}
                      onChange={(e) => setPostalCodeMailing(e.target.value)}
                      placeholder="Enter Postal Code"
                      required
                      disabled={isDisabled}
                    />
                    <Input
                      type="text"
                      name="cityMailing"
                      label="City"
                      error={cityError}
                      value={cityMailing}
                      onChange={(e) => setCityMailing(e.target.value)}
                      placeholder="Enter City"
                      required
                      disabled={isDisabled}
                    />
                    <section>
                      {countryError ? (
                        <ErrorLabel errorMessage={countryError} />
                      ) : (
                        ''
                      )}
                      <label>
                        <span className="text-danger">*</span> Country
                        <span className="text-danger"> (required)</span>
                      </label>

                      <Select
                        name="countryMailing"
                        options={options}
                        isDisabled={isDisabled}
                        value={options.filter(
                          (option) => option.value === countryMailing
                        )}
                        onChange={changeCountryMailingHandler}
                        isClearable
                        placeholder="Select your country of mailing address"
                      />
                    </section>
                  </fieldset>
                </div>
              ) : (
                ''
              )}
              <br></br>
              <Input
                type="email"
                name="email"
                label="Email"
                error={emailError}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
                disabled={isDisabled}
              />
              <Input
                type="text"
                name="phone"
                label="Phone"
                error={phoneError}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                required
                disabled={isDisabled}
              />
              <SubmitMessage
                messageType={infoMessage !== undefined ? 'success' : ''}
                message={infoMessage}
              />
              <SubmitMessage
                messageType={errorMessage !== undefined ? 'error' : ''}
                message={errorMessage}
              />

              <br></br>
              {isDisabled ? (
                ''
              ) : (
                <div className="flex justify-between items-center mb-10">
                  <input
                    type="submit"
                    className="btn btn-primary mr-4"
                    value="Save"
                    disabled={loading && true}
                  />
                  <input
                    type="reset"
                    className="btn btn-default"
                    value="Clear all"
                    onClick={handleReset}
                    disabled={loading && true}
                  />
                </div>
              )}
            </div>
          </fieldset>
        </form>
        <br></br>
        <NavButtons
          fromLocation={`/financial-info?id=${userData}`}
          toLocation={`/user-preferences?id=${userData}`}
        />
      </Layout>
    )
  }
