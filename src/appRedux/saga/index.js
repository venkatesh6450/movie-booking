import { all } from "redux-saga/effects";
import movies from "./movies";

function* rootSaga() {
    yield all([
      
      movies()
      
    ]);
};

export default rootSaga;
