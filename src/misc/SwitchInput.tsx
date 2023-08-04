export default function SwitchInput({
  state,
  setState,
}: {
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <label className="relative inline-block w-8 h-4">
      <input 
        type="checkbox" 
        onChange={(e) => setState(e.target.checked)} 
        checked={state}
        className="opacity-0 w-0 h-0" />
      <span className={`cursor-pointer absolute left-0 top-0 h-full w-full transition-all flex items-center rounded-full p-[0.1rem] ustify-start shadow-lg ${state ? 'bg-primary' : 'bg-secondary/50'}`}>
          <span className={`h-full aspect-square bg-[white] top-1/2 transition-all rounded-[50%] ${state ? 'translate-x-[120%]' : ''}`} />
      </span>
    </label>
  )
}