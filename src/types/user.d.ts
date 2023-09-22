export type User = {
    Id: string,
    FullName: string;
    Phone: string;
    Email: string;
    Type: 'ORGANIZATION' | 'ADMIN' | 'CLIENT'
    Status: 'ACTIVE' | 'INACTIVE' | 'PENDING',
    Role: 'ADMIN' | 'CLIENT' | 'ORGANIZATION'
}

export type TSessionUser = {
    Id: string,
    Email: string,
    FullName: string,
    Phone: string,
    Role: 'STANDARD USER' | 'ADMIN',
    IsOrganization: boolean,
    IsActive: false,
    iat: number,
    exp: number
}