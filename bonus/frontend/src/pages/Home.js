import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Card, Container, Stack, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobAction'
import { Link } from 'react-router-dom'
import CardElement from '../component/CardElement'
import Footer from '../component/Footer'
import LoadingBox from '../component/LoadingBox'
import SelectComponent from '../component/SelectComponent'
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction'

const Home = () => {
    const { jobs, loading } = useSelector(state => state.loadJobs);
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const [cat, setCat] = useState('');

    useEffect(() => {
        dispatch(jobLoadAction());
        dispatch(jobTypeLoadAction());
    }, [dispatch]);

    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }

    return (
        <>
            <Box sx={{ bgcolor: 'background.default', minHeight: "100vh" }}>
                <Navbar />
                <Header />
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 1, p: 2 }}>
                            <Card sx={{
                                minWidth: 150,
                                mb: 3,
                                mt: 3,
                                p: 2,
                                bgcolor: 'background.paper',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                borderRadius: '10px'
                            }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{
                                        color: palette.secondary.main,
                                        fontWeight: 600,
                                        fontSize: '1.2rem'
                                    }}>
                                        Filter Jobs by Category
                                    </Typography>
                                </Box>
                                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />
                            </Card>
                        </Box>

                        <Box sx={{ flex: 3, p: 2 }}>
                            {loading ? (
                                <LoadingBox />
                            ) : jobs && jobs.length === 0 ? (
                                <Box sx={{
                                    minHeight: '350px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                                        No jobs found
                                    </Typography>
                                </Box>
                            ) : (
                                <Box>
                                    <Typography variant="h5" sx={{
                                        mb: 3,
                                        pb: 1,
                                        borderBottom: '2px solid',
                                        borderColor: 'primary.main',
                                        display: 'inline-block'
                                    }}>
                                        Available Jobs
                                    </Typography>
                                    <Stack spacing={2}>
                                        {jobs && jobs.filter((job) => {
                                            if (cat === '') {
                                                return job;
                                            } else {
                                                return job.jobType === cat;
                                            }
                                        }).map((job, i) => (
                                            <Link key={i} to={`/job/${job._id}`} style={{ textDecoration: 'none' }}>
                                                <CardElement
                                                    jobTitle={job.title}
                                                    description={job.description || "No description available"}
                                                    category={job.jobType ? job.jobType.jobTypeName : "No category"}
                                                    location={job.location || "Location not specified"}
                                                    salary={job.salary || "Salary not specified"}
                                                    id={job._id}
                                                />
                                            </Link>
                                        ))}
                                    </Stack>
                                </Box>
                            )}
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Home