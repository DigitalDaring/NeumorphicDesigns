import { OutputActionTypes, SET_OUTPUT } from "./output-actions";
import { OutputState } from "./output-state";

export const initialOutputState: OutputState = {
    currentOutput: 25
};

export function outputReducer(
    state = initialOutputState,
    action: OutputActionTypes
): OutputState {
    switch(action.type) {
        case SET_OUTPUT:
            return {
                currentOutput: action.payload
            }
        default:
            return state
    }
}