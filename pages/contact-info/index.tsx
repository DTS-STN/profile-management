import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Input } from '../../components/Forms/Input'
import Select from 'react-select'
import { NavButtons } from '../../components/NavButtons'
import { ContactInfo } from '../../components/Layout/ContactInfo'
import { useRouter } from 'next/router'
import countryList from 'react-select-country-list'

export default function Index({ data }) {
  const router = useRouter()
  const userData = router.query.id
  const options = [
    { value: 'CA', label: 'Canada' },
    { value: 'OT', label: 'Other' },
  ] //countryList().getData()

  const contactInfo = data.userContact

  const [hasDifferentMailing, setHasDifferentMailing] = useState(
    contactInfo
      ? contactInfo.userAddresses && contactInfo.userAddresses.length > 1
      : false
  )

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
  const [addressTypeCodeMailing, setAddressTypeCodeMailing] = useState<string>(
    contactInfo &&
      contactInfo.userAddresses &&
      contactInfo.userAddresses.length > 1
      ? contactInfo.userAddresses[1].addressTypeCode
      : ''
  )

  return (
    <Layout data={data} title="Contact Information">
      <ContactInfo />

      <form noValidate>
        <fieldset className="fieldset">
          <legend>
            <h4 className="h4 mb-4">Contact Information</h4>
          </legend>
          <div className="w-1/2 mb-14">
            <fieldset className="fieldset-small">
              <legend>
                <h3 className="h3 mb-8">Residential Address</h3>
              </legend>

              <Input
                type="text"
                name="streetNumber"
                label="Street Number"
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
                disabled
              />
              <Input
                type="text"
                name="streetName"
                label="Street Name"
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
                disabled
              />
              <Input
                type="text"
                name="aptNumber"
                label="Apt Number"
                value={aptNumber}
                onChange={(e) => setAptNumber(e.target.value)}
                disabled
              />
              <Input
                type="text"
                name="postalCode"
                label="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                disabled
              />
              <Input
                type="text"
                name="city"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled
              />
              <section>
                <label>Country</label>
                <Select
                  name="country"
                  options={options}
                  value={options.filter((option) => option.value === country)}
                  onChange={changeCountryHandler}
                  isClearable
                  placeholder="Select your country of residence"
                  isDisabled
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
                  disabled
                  checked={!hasDifferentMailing}
                />
                <span> Mailing Address is same as residential Address?</span>
              </label>
            </section>
            <br></br>
            {hasDifferentMailing ? (
              <div>
                <fieldset className="fieldset-small">
                  <legend>
                    <h3 className="h3 mb-8">Mailing Address</h3>
                  </legend>
                  <Input
                    type="text"
                    name="streetNumberMailing"
                    label="Street Number"
                    value={streetNumberMailing}
                    onChange={(e) => setStreetNumberMailing(e.target.value)}
                    disabled
                  />
                  <Input
                    type="text"
                    name="streetNameMailing"
                    label="Street Name"
                    value={streetNameMailing}
                    onChange={(e) => setStreetNameMailing(e.target.value)}
                    disabled
                  />
                  <Input
                    type="text"
                    name="aptNumberMailing"
                    label="Apt Number"
                    value={aptNumberMailing}
                    onChange={(e) => setAptNumberMailing(e.target.value)}
                    disabled
                  />
                  <Input
                    type="text"
                    name="postalCodeMailing"
                    label="Postal Code"
                    value={postalCodeMailing}
                    onChange={(e) => setPostalCodeMailing(e.target.value)}
                    disabled
                  />
                  <Input
                    type="text"
                    name="cityMailing"
                    label="City"
                    value={cityMailing}
                    onChange={(e) => setCityMailing(e.target.value)}
                    disabled
                  />
                  <section>
                    <label>Country</label>
                    <Select
                      name="countryMailing"
                      options={options}
                      value={options.filter(
                        (option) => option.value === countryMailing
                      )}
                      isDisabled
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <Input
              type="text"
              name="phone"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled
            />
          </div>
        </fieldset>
      </form>
      <br />
      <NavButtons
        fromLocation={`/financial-info?id=${userData}`}
        toLocation={`/user-preferences?id=${userData}`}
      />
    </Layout>
  )
}

export const getServerSideProps = async (_context) => {
  const res = await fetch(
    `${process.env.API_SERVER_BASE_URL}/user/contact/info/${_context.query.id}`
  )
  const data = await res.json()
  return {
    props: {
      data: data,
    },
  }
}
