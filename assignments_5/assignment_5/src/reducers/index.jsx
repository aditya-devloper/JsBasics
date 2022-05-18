import takeTheData from "./Takedata";
import putTheData from "./Editdata";
import changeTheData from "./Change";
import Remove from "./Remove";

import { combineReducers } from "redux";

const rootReducer = combineReducers({

    takeTheData:takeTheData,
    putTheData:putTheData,
    changeTheData:changeTheData,
    Remove:Remove
});

export default rootReducer;