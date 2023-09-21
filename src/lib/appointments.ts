import { v4 as uuidv4 } from 'uuid'; // Importing UUID library for generating unique IDs
import { Appointment } from "@/types/appointment";
import users from "./users";

function getRandomDate(start: Date, end: Date): string {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toString();
}

const APPOINTMENTS: Appointment[] = [
    {
        Id: uuidv4(),
        User: users[6],
        Status: 'PENDING',
        Reason: 'I want to claim the fines posed on me for tax declaration delay',
        AppointmentType: 'TAX CONSULTATION',
        Time: getRandomDate(new Date(2023, 0, 1), new Date()) // Random date between Jan 1, 2023, and the current date
    },
    {
        Id: uuidv4(),
        User: users[0],
        Status: 'PENDING',
        Reason: 'I need assistance with my financial aid application for college',
        AppointmentType: 'FINANCIAL AID APPLICATION',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[1],
        Status: 'PENDING',
        Reason: 'Enrollment in government benefits programs',
        AppointmentType: 'BENEFITS ENROLLMENT',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[2],
        Status: 'PENDING',
        Reason: 'Seeking advice for managing my debts',
        AppointmentType: 'DEBT MANAGEMENT AND COUNSELING',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[3],
        Status: 'PENDING',
        Reason: 'Planning for retirement and investments',
        AppointmentType: 'INVESTMENT AND RETIREMENT PLANNING',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[4],
        Status: 'PENDING',
        Reason: 'Looking for business financing options',
        AppointmentType: 'BUSINESS FINANCING',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[5],
        Status: 'PENDING',
        Reason: 'Attending a financial literacy workshop',
        AppointmentType: 'FINANCIAL LITERACY WORKSHOPS',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[7],
        Status: 'PENDING',
        Reason: 'Need assistance with housing programs',
        AppointmentType: 'HOUSING ASSISTANCE',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
    {
        Id: uuidv4(),
        User: users[8],
        Status: 'PENDING',
        Reason: 'Planning for estate and asset management',
        AppointmentType: 'HOUSING ASSISTANCE',
        Time: getRandomDate(new Date(2023, 0, 1), new Date())
    },
];

export default APPOINTMENTS;
