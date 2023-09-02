
interface InputProps {
    placeholder: string;
    type: string;
}
export default function Input({placeholder, type}:InputProps){
    return (
        <div>
            <input className="border-[1px] border-gray-400 p-4 rounded-xl w-full" placeholder={placeholder} type={type} />
        </div>
    )
}