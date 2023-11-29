import React , {useState , useEffect} from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Paper from '@mui/material/Paper';    
import {
    Grid,
    Typography,
    Button,
    TextField,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    Menu,
    TablePagination,
  } from '@mui/material';
  import { Link } from "react-router-dom";
  import AddIcon from '@mui/icons-material/Add';
  import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



const Receipt = () => {


    const [age, setAge] = React.useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);



    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    const getRowBackgroundColor = (index) => {
      return index % 2 !== 0 ? '#F0F0F0' : 'inherit';
    };
    
    const cellStyle = (index) => ({
      padding: '0px 16px',
      backgroundColor: getRowBackgroundColor(index),
    });

  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://154.26.130.251:302/Receipt/GetAllHeader?OrganizationId=1');
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const jsonData = await response.json();
          setData(jsonData.Data);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, []);


    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    const handleChange = (event) => {
      setAge(event.target.value);
    };


   

      // Handler for selecting a row
  const handleRowSelect = (rowId) => {
    const selectedIndex = selectedRows.indexOf(rowId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, rowId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  // Handler for selecting all rows
  const handleSelectAllClick = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  // Handler for changing the number of rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handler for changing the current page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


    return(
        <div className="page-wrapper">
            <div className="content">
                <div className="col-lg-12">
                  <Grid container justifyContent='space-between' sx={{padding:'15px 0'}}>
                    <Grid item>
                    <Typography variant="h1" sx={{ fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.2rem' } , fontWeight:'bold' }}>Receipt</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item>
                              <TextField
                              label="Search"
                              id="outlined-size-small"
                              fullWidth
                              size="small"
                              />
                            </Grid>
                            <Grid item>
                              
                                <Button variant="contained" size="medium" sx={{margin:'0 0 0 10px'}} ><Link  to="/dream-pos/application/create_invoice" >Add New <AddIcon /></Link></Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="medium" sx={{margin:'0 0 0 10px'}} >Print</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                  </Grid>  
                  <Grid container sx={{border:'1px solid grey' , padding:'10px'}}>
                    <Grid container justifyContent='space-between' spacing={2}>
                        <Grid item xs={12} sm={6} md={3} lg={1.7}>
                            <TextField
                            label="Tran No"
                            id="outlined-size-small"
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={1.7}>
                            <LocalizationProvider   dateAdapter={AdapterDayjs}>
                            <DatePicker label='From' />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={1.7}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label='To'  fullWidth />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={1.7}>
                            <FormControl  fullWidth>
                            <InputLabel id="customer-label">Customer</InputLabel>
                            <Select
                                labelId="customer-label"
                                id="customer-select"
                                value={age}
                                label="Customer"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={1.7}>
                            <TextField
                            label="Invoice No"
                            id="outlined-size-small"
                            fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={1.7}>
                            <FormControl  fullWidth>
                            <InputLabel id="status-label">Paymode</InputLabel>
                            <Select
                                labelId="status-label"
                                id="status-select"
                                value={age}
                                label="Paymode"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={1.7}>
                            <Button fullWidth>Search</Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{margin:'10px 0'}}>
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow sx={{background:'#ff9f43'}}>
                                <TableCell>
                                <Checkbox
                                    indeterminate={
                                    selectedRows.length > 0 && selectedRows.length < data.length
                                    }
                                    checked={selectedRows.length === data.length}
                                    onChange={handleSelectAllClick}
                                />
                                </TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Tran No</TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Tran Date</TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Customer Code</TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Customer Name</TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Received Amount</TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Paymode</TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Cheque Status</TableCell>
                                <TableCell sx={{fontWeight:'bolder'}}>Action</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {(rowsPerPage > 0
                                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : data
                            ).map((row  , index) => (
                                <TableRow key={row.TranNo}>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>
                                    <Checkbox
                                    checked={selectedRows.indexOf(row.TranNo) !== -1}
                                    onChange={() => handleRowSelect(row.TranNo)}
                                    />
                                </TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>{row.TranNo}</TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>{row.TranDate}</TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>{row.CustomerCode}</TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>{row.CustomerName}</TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>{row.PaidAmount}</TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>{row.PayMode}</TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>{row.ChequeStatus}</TableCell>
                                <TableCell  sx={{ padding: '0px 16px', ...cellStyle(index) }}>
                                <PopupState variant="popover" popupId="demo-popup-menu">
                                    {(popupState) => (
                                      <React.Fragment>
                                        <Button variant="contained" size="small" {...bindTrigger(popupState)}>
                                          Select
                                        </Button>
                                        <Menu {...bindMenu(popupState)}>
                                          <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                          <MenuItem onClick={popupState.close}>My account</MenuItem>
                                          <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                        </Menu>
                                      </React.Fragment>
                                    )}
                                  </PopupState>
                                </TableCell>

                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[ 10, 25]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </TableContainer>
                    </Grid>
                  </Grid>
                </div>
            </div>
        </div>
    );
};

export default Receipt;