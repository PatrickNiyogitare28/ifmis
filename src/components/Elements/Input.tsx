
interface InputProps {
    placeholder: string;
    type: string;
    onChange?: (value: string) => void;
}
export default function Input({placeholder, type, onChange}:InputProps){
    return (
        <div>
            <input onChange={(event) => {
                if(onChange){
                    onChange(event.target.value)
                }
            }} className="border-[1px] border-gray-400 p-4 rounded-xl w-full" placeholder={placeholder} type={type} />
        </div>
    )
}