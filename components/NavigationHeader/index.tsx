export const NavigationHeader = () => {
  return (
    <ol className="grid grid-cols-3 gap-x-6 gap-y-2.5">
      <li
        className={`rounded py-3 px-6 ${
          true
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <a className="" href="/">
          1. Personal Information
        </a>
      </li>
      <li
        className={`rounded py-3 px-6 ${
          false
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <a className="" href="financial-info">
          2. Financial Information
        </a>
      </li>
      <li
        className={`rounded py-3 px-6 ${
          false
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <a className="" href="#">
          3. Contact Information
        </a>
      </li>
      <li
        className={`rounded py-3 px-6 ${
          false
            ? 'text-white text-h4 bg-primary'
            : 'text-primary text-h4 border border-primary-border underline'
        }`}
      >
        <a className="" href="#">
          4. User Preferences
        </a>
      </li>
    </ol>
  )
}
