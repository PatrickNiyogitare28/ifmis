export type User = {
    Id: string,
    FullName: string;
    Phone: string;
    Email: string;
    Status: 'ACTIVE' | 'INACTIVE' | 'PENDING',
    Role: 'ADMIN' | 'REFUGEE_FOCAL_POINT' | 'REFUGEE' | 'GOVERNMENT_ADMIN' | 'CONCERNED_MINISTRY_ADMIN' | 'DISTRICT_ADMIN' | 'SECTOR_ADMIN' | 'SECTOR' | 'ADMIN'
}