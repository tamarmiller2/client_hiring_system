
// //החלפת שמות
// //עובד!!!!!!!
// import React, { useState } from 'react';
// import { Button, TextField, Grid, FormControlLabel, Checkbox } from '@material-ui/core';
// import { TextField1, CheckboxField } from './FormField';

// interface FormValues {
//     [key: string]: string | number | number []| boolean|Date| File;
//   }

//   interface FormProps<T extends FormValues> {
//     title: string;
//     onSubmit: (data: T) => void;
//     initialValues: T;
//     fields: { label: string; key: keyof T; type: 'text' | 'number' |'Date'| 'boolean'|'null' }[];
//   }

//     const FormComponent = <T extends FormValues>({ title, onSubmit, initialValues, fields }: FormProps<T>) => {
//     const [formData, setFormData] = useState(initialValues);

//     const handleChange = (key: keyof T, value: string | number | boolean| Date) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             [key]: value,
//         }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSubmit(formData);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//                 {fields.map((field) => (
//                     <Grid item xs={12} key={field.key.toString()}>
//                         {field.type === 'boolean' ? (
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={formData[field.key] as boolean}
//                                         onChange={(e) => handleChange(field.key, e.target.checked)}
//                                         color="primary"
//                                     />
//                                 }
//                                 label={field.label}
//                             />
//                         ) : (
//                             <TextField
//                                 label={field.label}
//                                 type={field.type}
//                                 value={formData[field.key] as string | number}
//                                 onChange={(e) => handleChange(field.key, e.target.value)}
//                                 fullWidth
//                             />
//                         )}
//                     </Grid>
//                 ))}
//             </Grid>
//             <Button type="submit" variant="contained" color="primary">
//                 Submit
//             </Button>
//         </form>
//     );
// };

// export default FormComponent;


//+++++++++++++++++++++++++++++++++++++++++++++++
import React, { useState } from 'react';
import { Button, TextField, Grid, FormControlLabel, Checkbox } from '@material-ui/core';

export interface FormValues {
  [key: string]: string | number | boolean | Date | File | null;
}

interface FormProps<T extends FormValues> {
  title: string;
  onSubmit: (data: T) => void;
  initialValues: T;
  fields: { label: string; key: keyof T; type: 'text' | 'number' | 'date' | 'boolean' | 'file' }[];
}

const FormComponent = <T extends FormValues>({ title, onSubmit, initialValues, fields }: FormProps<T>) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (key: keyof T, value: string | number | boolean | Date) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} key={field.key.toString()}>
            {field.type === 'boolean' ? (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData[field.key] as boolean}
                    onChange={(e) => handleChange(field.key, e.target.checked)}
                    color="primary"
                  />
                }
                label={field.label}
              />
            ) : (
              <TextField
                label={field.label}
                type={field.type}
                value={formData[field.key] as string | number}
                onChange={(e) => handleChange(field.key, e.target.value)}
                fullWidth
              />
            )}
          </Grid>
        ))}
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
