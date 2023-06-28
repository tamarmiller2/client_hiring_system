import React from 'react';
import FormComponent from '../components/form/Form';
interface CandidateFormData {
    [key: string]: string | number | boolean;
    candidateName: string;
    candidateEmail: string;
    totalRating: number;
    cognitiveScore: number;
    personalityFit: number;
    screeningCall: boolean;
    interview: boolean;
    task: boolean;
    jobOffer: boolean;
    hired: boolean;
}

const CreateCandidatePage: React.FC = () => {
    const handleSubmit = (data: CandidateFormData) => {
        fetch('http://localhost:3000/candidates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to add candidate');
                }
            })
            .then(data => {
                console.log('Candidate added successfully:', data);
            })
            .catch(error => {
                console.error('Failed to add candidate:', error);
            });

    };

    const initialValues: CandidateFormData = {
        candidateName: '',
        candidateEmail: '',
        totalRating: 0,
        cognitiveScore: 0,
        personalityFit: 0,
        screeningCall: false,
        interview: false,
        task: false,
        jobOffer: false,
        hired: false,
    };

    return (
        <FormComponent<CandidateFormData>
            title="Create Candidate"
            onSubmit={handleSubmit}
            initialValues={initialValues}
            fields={[
                { label: "Name", key: "candidateName", type: "text" },
                { label: "Email", key: "candidateEmail", type: "text" },
                { label: "Total Rating", key: "totalRating", type: "number" },
                { label: "Cognitive Score", key: "cognitiveScore", type: "number" },
                { label: "Personality Fit", key: "personalityFit", type: "number" },
                { label: "Screening Call", key: "screeningCall", type: "boolean" },
                { label: "Interview", key: "interview", type: "boolean" },
                { label: "Task", key: "task", type: "boolean" },
                { label: "Job Offer", key: "jobOffer", type: "boolean" },
                { label: "Hired", key: "hired", type: "boolean" },
            ]}
        />
    );



};

export default CreateCandidatePage;
