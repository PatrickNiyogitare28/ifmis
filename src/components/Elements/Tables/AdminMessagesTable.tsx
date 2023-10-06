import ReplyMessageForm from '@/components/Forms/ReplyMessage';
import Modal from '@/components/Modal';
import ViewMessageReplay from '@/components/ViewMessageReply';
import { Message } from '@/generated/graphql';
import { TSessionUser } from '@/types/user';
import formatTimestampToDate from '@/utils/formatTime';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

interface UserMessagesTableProps {
    messages: Message[],
    User: TSessionUser,
    refetch: () => void
}

export default function AdminMessagesTable({ messages, User, refetch }: UserMessagesTableProps){
  const [replyModalActive, setReplayModalActive] = useState<boolean>(false);
  const [showViewReply, setShowViewReply] = useState<boolean>(false);
  const [activeMessage, setActiveMessage] = useState<Message>();
  const handleReply = (message: Message) => {
    setActiveMessage(message);
    setReplayModalActive(true);
  }

  const handleViewReply = (message: Message) => {
    setActiveMessage(message);
    setShowViewReply(true);
  }
  return (
    <>
    <Toaster />
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">#</th>
            <th className="border bg-gray-200">FULL NAME</th>
            <th className="border bg-gray-200">EMAIL</th>
            <th className="border bg-gray-200">PHONE</th>
            <th className="border bg-gray-200">MESSAGE</th>
            <th className="border bg-gray-200">MESSAGE TYPE</th>
            <th className="border bg-gray-200">SENT DATE</th>
            <th className="border bg-gray-200">STATUS</th>
            <th className="border bg-gray-200">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{index+1}</td>
              <td className="border p-2">{message.User.FullName}</td>
              <td className="border p-2 ">{message.User.Email}</td>
              <td className="border p-2 ">{message.User.Phone}</td>
              <td className="border p-2 ">{message.Message}</td>
              <td className="border p-2 ">{message.Type}</td>
              <td className="border p-2 ">{formatTimestampToDate(message.CreatedAt)}</td>
              <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${message.Status === 'REPLIED' ? 'bg-green-200 ' : 'bg-yellow-200'}`}>{message.Status}</label>
              </td>
              {message?.Status === 'REPLIED' ?
              <td className="border text-center">
                <div className='flex justify-around'>
                <button className="px-2 py-1 bg-primary text-white rounded-md flex  gap-2 p-2 items-center"
                 onClick={() => handleViewReply(message)}
                >
                {/* <BiPen color='white' /> */}
                    VIEW REPLY</button>
                </div>
              </td>
              :
              <td className="border text-center">
                <div className='flex justify-around'>
                <button className="px-2 py-1 bg-primary text-white rounded-md flex  gap-2 p-2 items-center" onClick={() => handleReply(message)}>
                {/* <BiPen color='white' /> */}
                    REPLY</button>
                </div>
              </td>
              }
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {replyModalActive && 
     <Modal title='REPLY MESSAGE' onClose={() => setReplayModalActive(false)}>
        <ReplyMessageForm  MessageId={(activeMessage as Message).Id as string} refetch={refetch}  User={User} onClose={() => setReplayModalActive(false)} />
     </Modal>
    }
     {showViewReply && 
     <Modal title='REPLY' onClose={() => setShowViewReply(false)}>
        <ViewMessageReplay  message={(activeMessage as Message)} />
     </Modal>
    }
    </>
  );
};

