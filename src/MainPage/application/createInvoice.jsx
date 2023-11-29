
import React  from "react";

// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Paper from '@mui/material/Paper';    
import {
    Grid,
    Typography,
    // Button,
    // TextField,
    // Checkbox,
    // Table,
    // TableBody,
    // TableCell,
    // TableContainer,
    // TableHead,
    // TableRow,
    // Select,
    // MenuItem,
    // TablePagination,
  } from '@mui/material';

  // import { ThemeProvider, createTheme } from '@mui/material/styles';
  // import { makeStyles } from '@mui/styles';



//   const Styles = makeStyles(() => ({

//    buttonStyle : {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '10px',
//     borderRadius: '5px',
//   }

// }));

const CreateInvoice = () => {



    return(
        <div className="page-wrapper">
            <div className="content">
                <div className="col-lg-12">
                  <Grid container justifyContent='space-between' sx={{padding:'15px 0'}}>
                    <Grid item>
                    <Typography variant="h1" sx={{ fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.2rem' } , fontWeight:'bold' }}>Create Invoice</Typography>
                    </Grid>

                  </Grid>   
                </div>
            </div>
        </div>
    );
};

export default CreateInvoice;