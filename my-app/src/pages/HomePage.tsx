// import React, { useEffect, useState } from 'react';
// const HomePage: React.FC = () => {
//   return (
// <div>
// </div>
//   );
// };
// export default HomePage;

//+++++++++++++++++++++++++++++++++
// import React, { useState } from 'react';
// import { Rating } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import Box from '@mui/material/Box';

// const HomePage: React.FC = () => {
//   const [value, setValue] = useState<number>(0);
//   const labels: string[] = ['Poor', 'Average', 'Good', 'Great', 'Excellent'];

//   return (
//     <div>
//       <Rating
//         name="text-feedback"
//         value={value}
//         readOnly
//         precision={0.5}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//       />
//       <Box sx={{ ml: 2 }}>{labels[value]}</Box>
//     </div>
//   );
// };

// export default HomePage;

//++++++++++++++++++++++++++++++++++++++++++
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

const HomePage: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const labels: string[] = ['Poor', 'Average', 'Good', 'Great', 'Excellent'];

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <Rating
        name="text-feedback"
        value={value}
        onChange={handleRatingChange}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </div>
  );
};

export default HomePage;


