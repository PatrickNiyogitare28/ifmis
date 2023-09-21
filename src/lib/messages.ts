import { v4 as uuidv4 } from 'uuid'; // Importing UUID library for generating unique IDs
import users from "./users";
import { Message } from '@/types/message';

function getRandomDate(start: Date, end: Date): string {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toString();
}

const MESSAGES: Message[] = [
    {
        Id: uuidv4(),
        User: users[6],
        Status: 'REPLIED',
        Message: 'I want to claim the fines posed on me for tax declaration delay',
        Time: getRandomDate(new Date(2023, 0, 1), new Date()) // Random date between Jan 1, 2023, and the current date
    },
    {
        Id: uuidv4(),
        User: users[0],
        Status: 'NOT REPLIED',
        Message: 'I need assistance with my financial aid application for college',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[1],
        Status: 'NOT REPLIED',
        Message: 'Enrollment in government benefits programs',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[2],
        Status: 'NOT REPLIED',
        Message: 'Seeking advice for managing my debts',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[3],
        Status: 'NOT REPLIED',
        Message: 'Planning for retirement and investments',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[4],
        Status: 'NOT REPLIED',
        Message: 'Looking for business financing options',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[5],
        Status: 'NOT REPLIED',
        Message: 'Attending a financial literacy workshop',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[7],
        Status: 'NOT REPLIED',
        Message: 'Need assistance with housing programs',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[8],
        Status: 'NOT REPLIED',
        Message: 'Planning for estate and asset management',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
];

export default MESSAGES;
