import React, { useEffect, useState } from 'react';
import TableComponent, { Column } from '../components/table/Table';
import { Rating } from '@material-ui/lab';
import StarIcon from '@mui/icons-material/Star';

interface Candidate {
  id: string;
  candidateName: string;
  candidateEmail: string;
  totalRating: number;
  cognitiveScore: number;
  personalityFit: number;
  screeningCall: string;
  interview: string;
  task: string;
  jobOffer: string;
  hired: boolean;
}

const CandidatesPage: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/candidates');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Failed to fetch candidates:', error);
      }
    };

    fetchCandidates();
  }, []);
  const columns: Column<Candidate>[] = [
    { label: 'Name', accessor: 'candidateName' },
    { label: 'Email', accessor: 'candidateEmail' },
    {
      label: 'Total Rating',
      accessor: 'totalRating',
      render: (data) => (
        <Rating
          name={`rating-${data.id}`}
          value={data.totalRating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      ),
    },
    { label: 'Cognitive Score', accessor: 'cognitiveScore' },
    { label: 'Personality Fit', accessor: 'personalityFit' },
    { label: 'Screening Call', accessor: 'screeningCall' },
    { label: 'Interview', accessor: 'interview' },
    { label: 'Task', accessor: 'task' },
    { label: 'Job Offer', accessor: 'jobOffer' },
    { label: 'Hired', accessor: 'hired' },
  ];
  
  return (
    <div>
      <h1>Candidates Page</h1>
      <TableComponent<Candidate> columns={columns} data={candidates} />
    </div>
  );
};

export default CandidatesPage;