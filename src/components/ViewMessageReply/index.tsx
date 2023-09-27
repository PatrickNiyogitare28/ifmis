import { Message } from "@/generated/graphql";

interface Props {
    message: Message,
}
export default function ViewMessageReplay ({message}: Props){
    console.log(message)
    return (
        <div className="w-[30vw]">
            <label>{message?.MessageReplies[0].Reply}</label>
        </div>
    )
}