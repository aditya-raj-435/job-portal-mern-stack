import axios from 'axios';
import { toast } from 'react-toastify'
import {
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    EDIT_JOB_FAIL,
    EDIT_JOB_REQUEST,
    EDIT_JOB_SUCCESS,
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS
} from "../constants/jobconstant"

// Helper function to handle errors
const handleError = (error) => {
    if (error.response && error.response.data && error.response.data.error) {
        return error.response.data.error;
    }
    return 'An error occurred. Please try again.';
};

export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`);
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        const message = handleError(error);
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: message
        });
        toast.error(message);
    }
}

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        const message = handleError(error);
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: message
        });
        toast.error(message);
    }
}

//delete single job action
export const deleteSingleJobAction = (job_id) => async (dispatch) => {
    dispatch({ type: DELETE_JOB_REQUEST });
    try {
        const { data } = await axios.delete(`/api/job/delete/${job_id}`);
        dispatch({
            type: DELETE_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job deleted successfully");
    } catch (error) {
        const message = handleError(error);
        dispatch({
            type: DELETE_JOB_FAIL,
            payload: message
        });
        toast.error(message);
    }
}

//edit single job action
export const editSingleJobAction = (job) => async (dispatch) => {
    dispatch({ type: EDIT_JOB_REQUEST });
    try {
        const { data } = await axios.put(`/api/job/update/${job._id}`, job);
        dispatch({
            type: EDIT_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job updated successfully");
    } catch (error) {
        const message = handleError(error);
        dispatch({
            type: EDIT_JOB_FAIL,
            payload: message
        });
        toast.error(message);
    }
}

// register job action
export const registerAjobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST })
    try {
        const { data } = await axios.post("/api/job/create", job);
        dispatch({
            type: REGISTER_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job created successfully");
    } catch (error) {
        const message = handleError(error);
        dispatch({
            type: REGISTER_JOB_FAIL,
            payload: message
        });
        toast.error(message);
    }
}