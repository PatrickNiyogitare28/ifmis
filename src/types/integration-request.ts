import { IntegrationType } from "./integration-type"
import { User } from "./user"

export type IntegrationRequests = {
    Id: string,
    User: User,
    Status: 'PENDING' | 'APPROVED' | 'REJECTED',
    RequestReviewLevel: number
    RequirementDocument: string,
    IntegrationType: IntegrationType,
    Description: string,
}