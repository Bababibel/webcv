export default function SwitchInput({
  state,
  setState,
}: {
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <label className="relative inline-block w-10 h-6">
      <input 
        type="checkbox" 
        onChange={(e) => setState(e.target.checked)} 
        checked={state}
        className="opacity-0 w-0 h-0 bg-primary" />
      <span className={`absolute left-0 top-0 h-full w-full transition-all flex items-center rounded-[45%] ${state ? 'bg-primary justify-end' : 'justify-start bg-base'}`}>
          <span className="h-full aspect-square bg-secondary top-1/2 transition-all rounded-[50%]" />
      </span>
    </label>
  )
}