export const SubmitMessage: React.VFC<{
  messageType: string
  message: string
}> = ({ messageType, message }) => (
  <div
    className={
      messageType === 'success'
        ? 'border-l-4 border-[#28ae60] opacity-90 px-3 py-1 bg-[#d8eeca] font-bold mb-1.5'
        : messageType === 'error'
        ? 'border-l-4 border-[#b6070a] opacity-90 px-3 py-1 bg-[#f2dede] font-bold mb-1.5'
        : ''
    }
  >
    {messageType === 'success' ? <span>&#x2714; </span> : ''}
    {messageType === 'error' ? <span>&#9747; </span> : ''}
    {message !== undefined ? message : ''}
  </div>
)
