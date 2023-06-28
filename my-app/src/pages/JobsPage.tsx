
import React, { useEffect, useState } from 'react';
import TableComponent, { Column }from '../components/table/Table';

interface Job {
  id: string;
  name: string;
  status: string;
  date: string;
  jobLocation?: string;
  companyDescription?: string;
  jobDescription?: string;
  requirements: string;
  companyLogo?: string;
}

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/jobs');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const columns: Column<Job>[] = [
    { label: 'Name', accessor: 'name' },
    { label: 'Status', accessor: 'status' },
    { label: 'Date', accessor: 'date' },
    { label: 'Location', accessor: 'jobLocation' },
    { label: 'Company Description', accessor: 'companyDescription' },
    { label: 'Job Description', accessor: 'jobDescription' },
    { label: 'Requirements', accessor: 'requirements' },
    { label: 'Company Logo', accessor: 'companyLogo' },
  ];

  return (
    <div>
      <h1>Jobs Page</h1>
      <TableComponent <Job> columns={columns} data={jobs} />
    </div>
  );
};

export default JobsPage;


