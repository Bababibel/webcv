import { useMainContext } from '../../misc/MainContext'

export default function DownloadIcon(props : any) {
  const { isDarkMode } = useMainContext()
  const color = isDarkMode ? "#38BAF8" : "#445490"
  return (
    <div {...props}>
      <svg  fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7H10V0H6V7L3 7V8L8 13L13 8V7Z" fill={color}/>
        <path d="M14 14H2V16H14V14Z" fill={color}/>
      </svg>
    </div>
  )
}