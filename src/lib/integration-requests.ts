import { IntegrationRequests } from "@/types/integration-request";
import users from "./users";
import INTEGRATION_TYPES from "./integration-types";

const INTEGRATION_REQUESTS: IntegrationRequests[] = [
    {
        Id: '4724-adadh42-42add-43ad',
        User: users[6],
        Status:  'PENDING',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/adkadaf-fx.pdf',
        IntegrationType: INTEGRATION_TYPES[0],
        Description: 'I want to join the work, I have skills, deploma and willing to get job'
    },
    {
        Id: '8237-fhdg38-29sdf-97ds',
        User: users[2],
        Status:  'APPROVED',
        RequestReviewLevel: 2,
        RequirementDocument: 'https://cloudinary.com/uploads/ghskdf34-34r.pdf',
        IntegrationType: INTEGRATION_TYPES[8],
        Description: 'I want to get engaged'
    },
    {
        Id: '2342-asdfg4-98fsd-62da',
        User: users[1],
        Status:  'REJECTED',
        RequestReviewLevel: 3,
        RequirementDocument: 'https://cloudinary.com/uploads/oihfg98-56r.pdf',
        IntegrationType: INTEGRATION_TYPES[3],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '6345-bcvn78-45sdf-31er',
        User: users[3],
        Status:  'PENDING',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/kdsfg45-78s.pdf',
        IntegrationType: INTEGRATION_TYPES[4],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '9837-hgtr32-76sdf-54gh',
        User: users[5],
        Status:  'APPROVED',
        RequestReviewLevel: 2,
        RequirementDocument: 'https://cloudinary.com/uploads/lojht78-23d.pdf',
        IntegrationType: INTEGRATION_TYPES[5],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '7456-ljfgs9-09sdf-32gt',
        User: users[4],
        Status:  'REJECTED',
        RequestReviewLevel: 3,
        RequirementDocument: 'https://cloudinary.com/uploads/kihgt43-67s.pdf',
        IntegrationType: INTEGRATION_TYPES[9],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '8943-ploi54-87sdf-21bn',
        User: users[7],
        Status:  'PENDING',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/gtds67-32d.pdf',
        IntegrationType: INTEGRATION_TYPES[4],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '2374-vhfg67-76sdf-48sd',
        User: users[9],
        Status:  'APPROVED',
        RequestReviewLevel: 2,
        RequirementDocument: 'https://cloudinary.com/uploads/qwert89-12s.pdf',
        IntegrationType: INTEGRATION_TYPES[1],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '5632-ncvz45-45sdf-54xc',
        User: users[8],
        Status:  'REJECTED',
        RequestReviewLevel: 3,
        RequirementDocument: 'https://cloudinary.com/uploads/zxcvb12-34d.pdf',
        IntegrationType: INTEGRATION_TYPES[5],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '1298-asdfr2-45sdf-76er',
        User: users[0],
        Status:  'PENDING',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/xcvbnm45-67d.pdf',
        IntegrationType: INTEGRATION_TYPES[6],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '3251-ksdje-awq21-98sk',
        User: users[2],
        Status: 'APPROVED',
        RequestReviewLevel: 2,
        RequirementDocument: 'https://cloudinary.com/uploads/dsfhj67-12d.pdf',
        IntegrationType: INTEGRATION_TYPES[7],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '9325-ghjsd-89dkl-45sj',
        User: users[4],
        Status: 'REJECTED',
        RequestReviewLevel: 3,
        RequirementDocument: 'https://cloudinary.com/uploads/poiuy78-34d.pdf',
        IntegrationType: INTEGRATION_TYPES[6],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '6478-mnbvc-54sdf-32er',
        User: users[6],
        Status: 'PENDING',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/tyuio89-56d.pdf',
        IntegrationType: INTEGRATION_TYPES[7],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '2398-zxcvb-67sdf-21er',
        User: users[8],
        Status: 'APPROVED',
        RequestReviewLevel: 2,
        RequirementDocument: 'https://cloudinary.com/uploads/asdfg90-12d.pdf',
        IntegrationType: INTEGRATION_TYPES[8],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '9876-qwerty-45sdf-65er',
        User: users[0],
        Status: 'REJECTED',
        RequestReviewLevel: 3,
        RequirementDocument: 'https://cloudinary.com/uploads/zxcvbn78-34d.pdf',
        IntegrationType: INTEGRATION_TYPES[9],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '1234-mnbvc-78sdf-12er',
        User: users[1],
        Status: 'PENDING',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/ghjkl89-56d.pdf',
        IntegrationType: INTEGRATION_TYPES[3],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '5678-tyuio-90sdf-45er',
        User: users[3],
        Status: 'APPROVED',
        RequestReviewLevel: 2,
        RequirementDocument: 'https://cloudinary.com/uploads/qwerty45-12d.pdf',
        IntegrationType: INTEGRATION_TYPES[4],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '8765-asdfg-23sdf-98er',
        User: users[5],
        Status: 'REJECTED',
        RequestReviewLevel: 3,
        RequirementDocument: 'https://cloudinary.com/uploads/tyuio78-34d.pdf',
        IntegrationType: INTEGRATION_TYPES[4],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '3456-qazws-12sdf-76er',
        User: users[7],
        Status: 'PENDING',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/qazws78-56d.pdf',
        IntegrationType: INTEGRATION_TYPES[2],
        Description: 'I want to transition from refugee life to much impactful status'
    },
    {
        Id: '6543-edcrf-34sdf-54er',
        User: users[9],
        Status: 'APPROVED',
        RequestReviewLevel: 1,
        RequirementDocument: 'https://cloudinary.com/uploads/edcrf90-12d.pdf',
        IntegrationType: INTEGRATION_TYPES[3],
        Description: 'I want to transition from refugee life to much impactful status'
    }
];

export default INTEGRATION_REQUESTS;