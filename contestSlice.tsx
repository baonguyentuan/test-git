import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import arrQuestion from './dethi.json'
import { ContestDetailModel, ContestState, QuestionModel } from "../../../_core/ContestModel";
import { setLoading } from '../loading/loadingSlice';
import { DispatchType } from '../../configStore';
const initialState: ContestState = {
    contestDetail: null,
    lstAnswer: []
}
const contestSlice = createSlice({
    name: 'contestSlice',
    initialState,
    reducers: {
        getContestDetail: (state: ContestState, action: PayloadAction<{ contestDetail: ContestDetailModel }>) => {
            state.contestDetail = action.payload.contestDetail
        },
        createLstAnswer: (state: ContestState) => {
            state.contestDetail?.lstQuestion.map((question, questionIndex) => {
                state.lstAnswer.push({
                    questionIndex,
                    answerSelected: []
                })
            })
        },
        setAnswer: (state: ContestState, action: PayloadAction<{ questionIndex: number, answerIndex: number, type: string, checked: boolean }>) => {
            let newLstAnswer = [...state.lstAnswer]
            if (action.payload.type === 'multi') {
                if (action.payload.checked === true) {
                    newLstAnswer[action.payload.questionIndex].answerSelected.push(action.payload.answerIndex)
                } else {
                    let findAnswerIndex = state.lstAnswer[action.payload.questionIndex].answerSelected.findIndex(answer => answer === action.payload.answerIndex)
                    if (findAnswerIndex !== -1) {
                        newLstAnswer[action.payload.questionIndex].answerSelected.splice(findAnswerIndex, 1)
                    }
                }
            } else {
                if (state.lstAnswer[action.payload.questionIndex].answerSelected.length = 0) {
                    newLstAnswer[action.payload.questionIndex].answerSelected.push(action.payload.answerIndex)
                } else {
                    newLstAnswer[action.payload.questionIndex].answerSelected[0] = action.payload.answerIndex
                }
            }
            state.lstAnswer = newLstAnswer
        }
    },

});
export const { getContestDetail, createLstAnswer, setAnswer } = contestSlice.actions
export default contestSlice.reducer
export const getContestDetailApi = (contestId: Number) => {
    return async (dispatch: DispatchType) => {
        await dispatch(setLoading({ isLoading: true }))
        try {
            let newContestDetail = {
                name: "Enlish",
                organization: 'baonguyen',
                category: ['english'],
                description: '123',
                duration: 120,
                timeStart: '11 Jun 2023 14:00:00 GMT',
                lstQuestion: arrQuestion
            }
            await dispatch(getContestDetail({ contestDetail: newContestDetail }))
            await dispatch(createLstAnswer())
        } catch (err) {
            console.log(err);
        }
        await dispatch(setLoading({ isLoading: false }))
    }
}