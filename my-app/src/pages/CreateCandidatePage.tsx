
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
//+++++++++++++++++++++++++++++++++++++++++
//calander

// import React from 'react';
// import FormComponent, { FormValues } from '../components/form/Form';
// import { DatePicker } from '@material-ui/pickers';

// interface JobFormData extends FormValues {
//   companyName: string;
//   jobTitle: string;
//   jobDescription: string;
//   companyLogo: File | null;
//   name: string;
//   status: string;
//   date: Date | null;
//   jobLocation: string;
//   companyDescription: string;
//   requirements: string;
// }

// const CreateJobPage: React.FC = () => {
//   const handleSubmit = (data: JobFormData) => {
//     // Handle form submission
//     console.log(data);
//   };

//   const initialValues: JobFormData = {
//     companyName: '',
//     jobTitle: '',
//     jobDescription: '',
//     companyLogo: null,
//     name: '',
//     status: '',
//     date: null,
//     jobLocation: '',
//     companyDescription: '',
//     requirements: '',
//   };

//   return (
//     <FormComponent<JobFormData>
//       title="Create Job"
//       onSubmit={handleSubmit}
//       initialValues={initialValues}
//       fields={[
//         { label: 'Name', key: 'name', type: 'text' },
//         { label: 'Status', key: 'status', type: 'text' },
//         { label: 'Date', key: 'date', type: 'date' },
//         { label: 'Job Location', key: 'jobLocation', type: 'text' },
//         { label: 'Company Description', key: 'companyDescription', type: 'text' },
//         { label: 'Job Description', key: 'jobDescription', type: 'text' },
//         { label: 'Requirements', key: 'requirements', type: 'text' },
//       ]}
//       renderField={(field, value, handleChange) => {
//         if (field.type === 'date') {
//           return (
//             <DatePicker
//               label={field.label}
//               value={value as Date | null}
//               onChange={(date) => handleChange(field.key, date)}
//               fullWidth
//               inputVariant="outlined"
//               format="MM/dd/yyyy"
//             />
//           );
//         }

//         // Render other field types using TextField or other components
//         return (
//           <TextField
//             label={field.label}
//             type={field.type}
//             value={value as string}
//             onChange={(event) => handleChange(field.key, event.target.value)}
//             fullWidth
//             variant="outlined"
//           />
//         );
//       }}
//     />
//   );
// };

// export default CreateJobPage;
