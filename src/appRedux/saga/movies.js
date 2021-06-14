import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {    GET_MOVIES_LIST_REQUEST,
            ADD_MOVIES_NAME_REQUEST,
            UPDATE_MOVIE_SEAT_REQUEST,
            GET_MOVIE_DETAILS_REQUEST 
        } from "../../constant/ActionTypes";

import {    getMoviesSuccess,
            addMovieNameSuccess,
            getMoviesRequest,
            updateMovieSeatSuccess,
            getMovieDetailsSuccess 
         } from "../../appRedux/actions";

import {    moviesListApi,
            addmoviesApi,
            movieSeatUpdateApi,
            getMovieDetailsApi 
        } from '../api';
        
import { message } from 'antd'


// worker Saga
function* moviesListMainSaga({data}) {
    try {
        const moviesData = yield call(moviesListApi,data);
        if (moviesData) {
            console.log("moviesData", moviesData)
            yield put(getMoviesSuccess(moviesData))
        } 
        else {
         message.error('Something went wrong. Try again!')
        }
    } catch (error) {
         message.error('Something went wrong. Try again!')
    }
}


function* addmovieMainSaga({data}) {
    try {
        const addmovies = yield call(addmoviesApi,data);
        if (addmovies) {
            console.log("addmovies", addmovies)
            yield put(addMovieNameSuccess(addmovies))
            yield put(getMoviesRequest())
        } 
        else {
         message.error('Something went wrong. Try again!')
        }
    } catch (error) {
         message.error('Something went wrong. Try again!')
    }
}

function* getmovieDetailsMainSaga({id}) {
   
    try {
        const getmovieDetailsData = yield call(getMovieDetailsApi,id);
        if (getmovieDetailsData) {
            yield put(getMovieDetailsSuccess(getmovieDetailsData))
        } 
        else {
         message.error('Something went wrong. Try again!')
        }
    } catch (error) {
         message.error('Something went wrong. Try again!')
    }
}


function* upateSeatmovieMainSaga({data}) {
     console.log("upateSeatmovieMainSaga sagas", data)
    try {
        const updateseatmovieData = yield call(movieSeatUpdateApi,data);
        if (updateseatmovieData) {
            yield put(updateMovieSeatSuccess(updateseatmovieData))
            yield put(getMoviesRequest())
        } 
        else {
         message.error('Something went wrong. Try again!')
        }
    } catch (error) {
         message.error('Something went wrong. Try again!')
    }
}


//   Watcher Saga
export function* moviesList() {
    yield takeEvery(GET_MOVIES_LIST_REQUEST, moviesListMainSaga);
}

export function* addmovie() {
    yield takeEvery(ADD_MOVIES_NAME_REQUEST, addmovieMainSaga);
}

export function* upateSeatmovie() {
    yield takeEvery(UPDATE_MOVIE_SEAT_REQUEST, upateSeatmovieMainSaga);
}

export function* getMovieDetails() {
    yield takeEvery(GET_MOVIE_DETAILS_REQUEST, getmovieDetailsMainSaga);
}


export default function* rootSaga() {
    yield all(
        [
            fork(moviesList),
            fork(addmovie),
            fork(upateSeatmovie),
            fork(getMovieDetails)
           
        ]
    );
}