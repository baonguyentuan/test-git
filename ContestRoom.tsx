import React, { useEffect, useState } from 'react'
import { Button, Form, Pagination, Statistic } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import '../../assets/css/contest/contest.css'
import { backToPosition } from '../../utils/operate'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/configStore'
import { getContestDetailApi, setAnswer } from '../../redux/reducers/contest/contestSlice'
import { QuestionModel } from '../../_core/ContestModel'
import moment from 'moment'
const { Countdown } = Statistic;
type Props = {}
const DEFAULT__PAGE__SIZE = 10
export default function ContestRoom({ }: Props) {
    let [currentPage, setCurrentPage] = useState(1)
    let { contestDetail, lstAnswer } = useSelector((state: RootState) => state.contestSlice)
    let dispatch: DispatchType = useDispatch()
    useEffect(() => {
        dispatch(getContestDetailApi(234))
    }, [])
    return (
        <div className='size__component grid grid-cols-6 gap-4 py-8'>
            <div className='col-span-2 ' >
                <div className='sticky right-0 top-0'>
                    <div className='px-2 m-2 border-2 border-solid rounded-2xl ' >
                        <h1 className='font-bold text-center text-xl'>{contestDetail?.name}</h1>
                        <h1 className='font-bold text-center text-xl'>{moment().format('DD/MM/YYYY')}</h1>
                        <p><span>Organize by: </span><span>{contestDetail?.organization}</span></p>
                        <p><span>Category: </span><span>{contestDetail?.category.join(' / ')}</span></p>
                        <p><span>Duration: </span><span>{contestDetail?.duration}min</span></p>
                        <p><span>Start at: </span><span>16h30</span></p>
                        <Countdown
                            title={<p>Time remain:</p>}
                            value={Date.now() + (Date.parse('11 Jun 2023 20:30:00 GMT+7') - Date.now())}
                            valueStyle={{ fontSize: 30 }}
                            format="HH:mm:ss"
                            onFinish={() => { alert(1) }} />
                        <Button className='my-2' onClick={() => {
                            console.log(lstAnswer);
                            
                        }}>Finish</Button>
                    </div>
                    <div className='px-2 m-4 border-2 border-solid rounded-2xl overflow-y-scroll' style={{ height: 250 }}>
                        <h1 className='font-bold text-center text-xl my-2'> Manager Answer</h1>
                        <div className='mb-2'>
                            <p><span><CheckCircleOutlined className='-translate-y-1 text-green-600 text-xl' /></span>: <span>Question answered</span></p>
                            <p><span><CloseCircleOutlined className='-translate-y-1 text-red-600 text-xl' /></span>: <span>Question unanswered</span></p>
                        </div>
                        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 pb-2'>
                            {lstAnswer.map((answer, answerIndex) => {
                                return <div onClick={async () => {
                                    await setCurrentPage(Math.floor((answerIndex) / DEFAULT__PAGE__SIZE) + 1)
                                    let topScroll = document.getElementById(`question-${answerIndex + 1}`)?.offsetTop
                                    if (topScroll) {
                                        backToPosition(topScroll)
                                    }
                                }} key={`question-${answerIndex}`} className='flex justify-between items-center border-2 border-solid rounded-sm p-2 hover:bg-slate-100 cursor-pointer'>
                                    <span className='text-center'>{`${answerIndex + 1}`}</span>
                                    {answer.answerSelected.length > 0 ? <span><CheckCircleOutlined className='-translate-y-1 text-green-600 text-xl' /></span> : <span><CloseCircleOutlined className='-translate-y-1 text-red-600 text-xl' /></span>}
                                </div>
                            })}
                        </div>
                    </div>
                    <Pagination defaultCurrent={1} total={lstAnswer.length} defaultPageSize={10} onChange={(page) => {
                        setCurrentPage(page)
                    }} />
                </div>
            </div>
            <div className='col-span-4 m-2 border-2 border-solid rounded-2xl overflow-hidden'>
                <div>
                    {contestDetail?.lstQuestion.map((question: QuestionModel, questionIndex: number) => {
                        let bgColor: string
                        if (questionIndex % 2 === 0) {
                            bgColor = 'bg-slate-100'
                        } else {
                            bgColor = ''
                        }
                        if (questionIndex >= (currentPage - 1) * DEFAULT__PAGE__SIZE && questionIndex < currentPage * DEFAULT__PAGE__SIZE)
                            return <div id={`question-${questionIndex + 1}`} className={`p-4 m-0 ${bgColor} `} key={questionIndex} >
                                <p className=' mb-2 text-base font-semibold'>{`Question ${questionIndex + 1}: ${question.question}`}</p>
                                <div className=' grid xl:grid-cols-2 grid-cols-1 gap-4'>
                                    {question.answer.map((answer: string, answerIndex: number) => {
                                        if (question.type === 'multi') {
                                            return <div key={answerIndex} className='answerSelectionBox'>
                                                <input className='answerSelection' name={`answer-${questionIndex}`} id={`answer-${questionIndex + 1}-${answerIndex}`} type='checkbox' onChange={(event) => {
                                                    if (event.target.checked === true) {
                                                        dispatch(setAnswer({
                                                            questionIndex,
                                                            answerIndex,
                                                            type: question.type,
                                                            checked: true
                                                        }))
                                                    } else {
                                                        dispatch(setAnswer({
                                                            questionIndex,
                                                            answerIndex,
                                                            type: question.type,
                                                            checked: false
                                                        }))
                                                    }
                                                }} />
                                                <label className='answerLabel' htmlFor={`answer-${questionIndex + 1}-${answerIndex}`}>{answer}</label>
                                            </div>
                                        } else {
                                            return <div className='answerSelectionBox'>
                                                <input className='answerSelection' name={`answer-${questionIndex + 1}`} id={`answer-${questionIndex + 1}-${answerIndex}`} type='radio' onChange={(event) => {
                                                    dispatch(setAnswer({
                                                        questionIndex,
                                                        answerIndex,
                                                        type: question.type,
                                                        checked: true
                                                    }))
                                                }} />
                                                <label className='answerLabel' htmlFor={`answer-${questionIndex + 1}-${answerIndex}`}>{answer}</label>
                                            </div>
                                        }
                                    })}
                                </div>

                            </div>
                    })}
                </div>
            </div>

        </div>
    )
}