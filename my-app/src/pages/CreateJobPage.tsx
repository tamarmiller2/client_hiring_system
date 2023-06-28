// import React from 'react';
// import FormComponent from '../components/form/Form';
// import { TextField1, FileField } from '../components/form/FormField';

// interface JobFormData {
//   [key: string]: string | number | boolean;
//   companyName: string;
//   jobTitle: string;
//   jobDescription: string;
//   companyLogo: File | null;
//   name: string;
//   status: string;
//   date: Date;
//   jobLocation?: string;
//   companyDescription?: string;
//   requirements: string;
//   companyLogo?: {
//     data: Buffer;
//     contentType: string;
//   };
//   candidates?: ICandidate[];
// }


// const CreateJobPage: React.FC = () => {
//   const handleSubmit = (data: JobFormData) => {
//     const formData = new FormData();
//     formData.append('companyName', data.companyName);
//     formData.append('jobTitle', data.jobTitle);
//     formData.append('jobDescription', data.jobDescription);
//     if (data.companyLogo) {
//       formData.append('companyLogo', data.companyLogo);
//     }

//     fetch('http://localhost:3000/jobs', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Failed to create job');
//         }
//       })
//       .then(data => {
//         console.log('Job created successfully:', data);
//       })
//       .catch(error => {
//         console.error('Failed to create job:', error);
//       });
//   };

//   // const initialValues: JobFormData = {
//   //   companyName: '',
//   //   jobTitle: '',
//   //   jobDescription: '',
//   //   companyLogo: null,
//   // };

//   const fields = [
//     { label: "Company Name", key: "name" },
//     { label: "Status", key: "status" },
//     { label: "Date", key: "date" },
//     { label: "Job Location", key: "jobLocation" },
//     { label: "Company Description", key: "companyDescription" },
//     { label: "Job Description", key: "jobDescription" },
//     { label: "Requirements", key: "requirements" },
//     { label: "Company Logo", key: "companyLogo" },
// ] as const;


//   return (
//     <FormComponent<JobFormData>
//       title="Create Job"
//       onSubmit={handleSubmit}
//       initialValues={initialValues}
//       fields={fields}
//     />
//   );
// };

// export default CreateJobPage;

//+++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react';
// import GenericForm from '../components/form/Form';
// interface Job{
//     name: string;
//     status: string;
//     date: Date;
//     jobLocation?: string;
//     companyDescription?: string;
//     jobDescription?: string;
//     requirements: string;
//     companyLogo?: string;
//   }
// const CreateJobPage: React.FC = () => {
//     const initialValues: Job = {
//         name: '',
//         status: '',
//         date:new Date(),
//         jobLocation: '',
//         companyDescription: '',
//         jobDescription: '',
//         requirements: '',
//         companyLogo: '',
//       };
//       const handleSubmit = (values: Job) => {
//         // Here you can send the data to your server to create a new job
//         //fetch post
//         fetch('http://localhost:3000/jobs', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//         })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error('Failed to add candidate');
//                 }
//             })
//             .then(data => {
//                 console.log('Candidate added successfully:', data);
//             })
//             .catch(error => {
//                 console.error('Failed to add candidate:', error);
//             });
//         console.log(values);
//       };
//       const fields = [
//         { label: 'Name', key: initialValues.name, type: 'text' },
//         { label: 'Status', key: 'status', type: 'text' },
//         { label: 'Date', key: 'date', type: 'text' },
//         { label: 'Job Location', key: 'jobLocation', type: 'text' },
//         { label: 'Company Description', key: 'companyDescription', type: 'text' },
//         { label: 'Job Description', key: 'jobDescription', type: 'text' },
//         { label: 'Requirements', key: 'requirements' , type: 'text' },
//         { label: 'Company Logo', key: 'companyLogo' , type: 'text' },
//       ];
//   return (
// <div>
// <h1>create job page</h1>
//       <GenericForm<Job> onSubmit={handleSubmit} initialValues={initialValues}
//        fields={[
//         { label: 'Name', key: 'name', type: 'text' },
//         { label: 'Status', key: 'status', type: 'text' },
//         { label: 'Date', key: 'date', type: 'text' },
//         { label: 'Job Location', key: 'jobLocation', type: 'text' },
//         { label: 'Company Description', key: 'companyDescription', type: 'text' },
//         { label: 'Job Description', key: 'jobDescription', type: 'text' },
//         { label: 'Requirements', key: 'requirements' , type: 'text' },
//         { label: 'Company Logo', key: 'companyLogo' , type: 'text' },
//       ]}  />
// </div>
//   );
// };
// export default CreateJobPage;

//+++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react';
// import FormComponent from '../components/form/Form';

// interface JobFormData {
//   [key: string]: string |  boolean;
//   companyName: string;
//   jobTitle: string;
//   jobDescription: string;
//   name: string;
//   status: string;
//   date: Date;
//   jobLocation?: string;
//   companyDescription?: string;
//   requirements: string;
//   companyLogo?: {
//     data: Buffer;
//     contentType: string;
//   };
//   candidates?: ICandidate[];
// }


import React from 'react';
import FormComponent, { FormValues } from '../components/form/Form';

interface JobFormData extends FormValues {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  companyLogo: File | null;
  name: string;
  status: string;
  date: Date;
  jobLocation: string;
  companyDescription: string;
  requirements: string;
}

const CreateJobPage: React.FC = () => {
  const handleSubmit = (data: JobFormData) => {
    // Here you can send the data to your server to create a new job
    //fetch post
    fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          //add to db
          return response.json();
        } else {
          throw new Error('Failed to add job');
        }
      })
      .then(data => {
        console.log('Job added successfully:', data);
      })
      .catch(error => {
        console.error('Failed to add job:', error);
      });
    console.log(data);
  };
  const initialValues: JobFormData = {
    companyName: '',
    jobTitle: '',
    jobDescription: '',
    companyLogo: null,
    name: '',
    status: '',
    date: new Date(),
    jobLocation: '',
    companyDescription: '',
    requirements: '',
  };



  return (
    <FormComponent<JobFormData>
      title="Create Job"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      fields={[
        { label: 'Name', key: 'name', type: "text" },
        { label: 'Status', key: 'status', type: "text" },
        { label: 'Date', key: 'date', type: "text" },
        { label: 'Job Location', key: 'jobLocation', type: "text" },
        { label: 'Company Description', key: 'companyDescription', type: "text" },
        { label: 'Job Description', key: 'jobDescription', type: "text" },
        { label: 'Requirements', key: 'requirements', type: "text" },

        // { label: 'Company Name', key: 'companyName',type: "text" },
        // { label: 'Job Title', key: 'jobTitle',type: "text" },
        // { label: 'Company Logo', key: 'companyLogo',type: "text" },

      ]}
    />
  );
};

export default CreateJobPage;
