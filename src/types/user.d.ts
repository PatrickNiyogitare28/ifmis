export type User = {
    Id: string,
    FullName: string;
    Phone: string;
    Email: string;
    Type: 'ORGANIZATION' | 'ADMIN' | 'CLIENT'
    Status: 'ACTIVE' | 'INACTIVE' | 'PENDING',
    Role: 'ADMIN' | 'CLIENT' | 'ORGANIZATION'
}