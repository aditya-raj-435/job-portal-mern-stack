import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputBase, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const validationSchema = yup.object({
    search: yup
        .string('Enter your search query')
        .required('This field cannot be empty'),
});

const SearchInputEl = () => {
    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        const { search } = values;
        if (search.trim()) {
            navigate(`/search/${search}`);
        } else {
            navigate('/');
        }
        actions.resetForm();
    }

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            search: '',
        },
        validationSchema: validationSchema,
        onSubmit
    });

    return (
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
            <form onSubmit={handleSubmit}>
                <Paper
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        p: '2px 4px',
                        borderRadius: '50px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <SearchIcon sx={{ p: '10px', color: 'text.secondary' }} />
                    <InputBase
                        sx={{
                            ml: 1,
                            flex: 1,
                            '& input': {
                                padding: '12px 14px',
                            }
                        }}
                        placeholder="Search jobs (e.g. Developer, Designer)"
                        id="search"
                        name="search"
                        value={values.search}
                        onChange={handleChange}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        disabled={isSubmitting}
                        sx={{
                            borderRadius: '50px',
                            px: 4,
                            py: 1,
                            m: 1,
                            textTransform: 'none',
                            fontSize: '1rem'
                        }}
                    >
                        Search
                    </Button>
                </Paper>
                {touched.search && errors.search && (
                    <Box sx={{ 
                        color: 'error.main',
                        mt: 1,
                        textAlign: 'center',
                        fontSize: '0.875rem'
                    }}>
                        {errors.search}
                    </Box>
                )}
            </form>
        </Box>
    );
};

export default SearchInputEl;


