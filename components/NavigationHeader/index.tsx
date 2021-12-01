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
        <a className="" href="#">
          Personal Information
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
          Financial Information
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
          Contact Information
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
          User Preferences
        </a>
      </li>
    </ol>
  )
}
