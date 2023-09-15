"use client";

import React from "react";
import EmployeesTable from "../Components/EmployeesTable"



export default function BasicButtons() {
  return (
    <>
      {/* <h1>This is employee page</h1> */}
    {/* <MuiDrawer/> */}
<EmployeesTable/>
      {/* <table class="table table-hover text-center table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img
                src="../Avtars/profilepic1.jpg"
                alt="Profile"
                className="rounded-circle img-fluid"
                style={{ width: "30px" }}
              />
              Sachin Pawar
            </td>

            <td className="w-25">sachinspindofficial@gmail.com</td>
            <td>Bhopal</td>
            <td>9516905325</td>
            <td>UI Designing</td>

            <td>
              <div class=" bg-success text-light rounded-pill px-2">
                Active
                
              </div>
            </td>
            <td>
              <button
                type="button"
                class="border-0 bg-transparent"
                data-bs-toggle="modal"
                data-bs-target="#editbutton"
                title="Edit Employee Details"
              >
                <i class="bx bxs-edit fs-4 text-primary"></i>
              </button>
              <div
                class="modal  fade"
                id="editbutton"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Edit Employees Details
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">edit employee</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <button
                type="button"
                class="border-0 bg-transparent"
                data-bs-toggle="modal"
                data-bs-target="#deletebutton"
                title="Delete Employee"
              >
                
              <i class='bx bxs-trash fs-4 text-danger'></i>
              </button>
              <div
                class="modal  fade"
                id="deletebutton"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">Delete Employee</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <a href="#" title="See Details"
                               
              >
                <i class='bx bx-dots-vertical-rounded fs-4 text-dark'></i>
              
              </a>

              

            </td>
          </tr>
        </tbody>
      </table> */}

      <>
        {/* <CssBaseline />
      <Container maxWidth="xl" sx={{fontFamily:"roboto,400"}}>

        <Box sx={{ height: "100vh" }}>
          <Paper elevation={3} sx={{width: "100%", height: "55px" }}>
            <SearchIcon sx={{m:'1rem'}} />
            <TextField
              id="standard-basic"
              label="Search Employees"
              variant="outlined"
              size="small" sx={{my:'0.3rem', color:'#fff'}}
              />          
            

              
          </Paper>

          <Paper sx={{ width: "100%", mt:'2rem' }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>

                    <TableCell>Designation</TableCell>

                    <TableCell>Email</TableCell>

                    <TableCell>Mobile</TableCell>

                    <TableCell>Status</TableCell>

                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Avatar
                          alt="Employees Dp"
                          src="../Avtars/profilepic1.jpg"
                        />
                        <Typography sx={{ alignSelf: "center" }}>
                          Sachin Pawar
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ alignSelf: "center" }}>
                        Front-End Developer
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ alignSelf: "center" }}>
                        sachinspindofficial@gmail.com
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ alignSelf: "center" }}>
                        +91 9516905325
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Badge
                          color="success"
                          badgeContent=" "
                          variant="dot"
                          sx={{ alignSelf: "center" }}
                        ></Badge>
                        <Typography sx={{ alignSelf: "center" }}>
                          Active
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                      >
                        <MoreIcon onClick={detailsPage()} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Avatar
                          alt="Employees Dp"
                          src="../Avtars/profilepic1.jpg"
                        />
                        <Typography sx={{ alignSelf: "center" }}>
                          Sachin Pawar
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ alignSelf: "center" }}>
                        Front-End Developer
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ alignSelf: "center" }}>
                        sachinspindofficial@gmail.com
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ alignSelf: "center" }}>
                        +91 9516905325
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Badge
                          color="success"
                          badgeContent=" "
                          variant="dot"
                          sx={{ alignSelf: "center" }}
                        ></Badge>
                        <Typography sx={{ alignSelf: "center" }}>
                          Active
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        color="inherit"
                      >
                        <MoreIcon />
                      </IconButton>
                    </TableCell>
                    
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Stack spacing={2} sx={{alignItems:'center',my:'2rem'}}>
              <Pagination count={6}  color="primary" sx={{mb:'5rem'}}/>
            </Stack>
          </Paper>
        </Box>
      </Container> */}
      </>
    </>
  );
}
