
interface InputProps {
    placeholder: string;
    type: string;
    onChange?: (value: string) => void;
    fieldProps?: any,
    error?: string,
    isDirty?: boolean
}
export default function Input({placeholder, type, onChange, fieldProps, error, isDirty}:InputProps){
    return (
        <div>
            <input 
            onChange={(event) => {
                if(onChange){
                    onChange(event.target.value)
                }
            }} 
            className={`border-[1px] ${(isDirty && error) ? 'border-danger' : 'border-gray-400'}  p-4 rounded-xl w-full`}
            placeholder={placeholder} 
            type={type} 
            {...fieldProps}
            />
             {error && isDirty && <p className="text-danger font-lighter text-sm">{error}</p>}
        </div>
    )
}