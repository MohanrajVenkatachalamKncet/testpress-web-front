
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Importing API , GLOBAL States
import { setQuestions , setCount } from '../store/actions.js';
import { Question_API } from '../axios/axios';
import LoadingScreen from "../components/LoadingScreen.js"
import {Link} from 'react-router-dom'
import { CreateUserScore ,ReadUserScore} from '../axios/axios.js'   

//Importing Packages of Ant Designs and CSS 
import { Row, Col, Typography, Button } from 'antd';
import "../css/QuizQuestionView.css";
import "../styles/Card.css";
import 'antd/dist/antd.css';

//Event Handling
//Answer Validation
export default function QuizQuestionView() {
    const [colorOption1, setOption1] = useState('#1890ff');
    const [colorOption2, setOption2] = useState('#1890ff');
    const [colorOption3, setOption3] = useState('#1890ff');
    const [colorOption4, setOption4] = useState('#1890ff');
    const [disable, setDisable] = useState(false);
    const [textColor, setTextColor] = useState('white');
    const [index, setIndex] = useState(0);
    const [result,setResult]=useState(0);

    const { username, questions, count } = useSelector(state => state);
    const [load, setLoad] = useState(true);
    const dispatch = useDispatch();
    function AnswerCount(options,answer,opt){
        AnswerColorChange(opt,answer,options)
        setDisable(true);
        if (options === answer) {
            dispatch(setCount(count + 1));
            setResult((result) => result + 1);
          }
    }
    //Answer Color Changing
    function AnswerColorChange(options,answer,opt) {
        console.log("clic "+options[0]+"ans"+answer+result)
        if (options[0] === answer) {
            setOption1('green')
            setOption2('red')
            setOption3('red')
            setOption4('red')
            // setDisable(true)
           // dispatch(setCount(count+1))
            //setResult(result=>result+1);
        }
       else if (options[1] === answer) {
            setOption2('green')
            setOption1('red')
            setOption3('red')
            setOption4('red')
        }
       else if (options[2] === answer) {
            setOption3('green')
            setOption1('red')
            setOption2('red')
            setOption4('red')
        }
       else if (options[3] === answer) {
            setOption4('green')
            setOption2('red')
            setOption3('red')
            setOption1('red')
        }
    }

    //Options Mapping and Shuffling
    function Option(questions, index) {
        //console.log(questions + " " + index);
        var data = [questions.correct_answer, ...questions.incorrect_answers];
        var options = data.sort(() => Math.random() - 0.5);
        return (
            <div>
                <Col span={12} style={{ padding: '1%' }}>
                    {options[0] !== undefined && <Col span={12}>
                        <Button disabled={disable} type="primary" shape="round" style={{ backgroundColor: colorOption1 ,color:textColor }} onClick={e => AnswerCount(options[0], questions.correct_answer,options)} value={options[0]} size={10}> {options[0]}</Button>
                    </Col>}
                    {options[1] !== undefined && <Col span={12}>
                        <Button disabled={disable} type="primary" shape="round" style={{ backgroundColor: colorOption2 ,color:textColor }} onClick={e => AnswerCount(options[1], questions.correct_answer,options)} value={options[1]} size={10}> {options[1]}</Button>
                    </Col>}
                    {options[2]  !== undefined && <Col span={12}>
                        <Button disabled={disable} type="primary" shape="round" style={{ backgroundColor: colorOption3 ,color:textColor }} onClick={e => AnswerCount(options[2], questions.correct_answer,options)} value={options[2]} size={10}> {options[2]}</Button>
                    </Col>}
                    {options[3] !== undefined && <Col span={12}>
                        <Button disabled={disable} type="primary" shape="round" style={{ backgroundColor: colorOption4 ,color:textColor }} onClick={e => AnswerCount(options[3], questions.correct_answer,options)} value={options[3]} size={10}> {options[3]}</Button>
                    </Col>}
                </Col>
            </div>
        )
    }

    //Change the Question When you click the Save & Next
    function changeQuestion() {
        if (index < questions.length) {
            setIndex(index => index + 1);
            setOption1('#1890ff');
            setOption2('#1890ff');
            setOption3('#1890ff');
            setOption4('#1890ff');
            setDisable(false)
        }
    }

    //Rendering Quiz Questions
    useEffect(() => {
        let ans = async () => {
            let res = await Question_API();
            dispatch(setQuestions(res));
            dispatch(setCount(0));
            setLoad(false);
        }
        ans();
        return () => { };
    }, []);

    //Loading Screen
    if (load) {
        return (<LoadingScreen />)
    }
    //console.log("Score "+count);

    async function reviewCall(){
        const data = await ReadUserScore();
        //console.log(data);  
    }
    return (
        <div className="wrapper">
            <Typography className="text-head">Welcome to the quiz app , {`${username}`}</Typography>
            {index<10 ?
                <div>
                    <div>
                    <Row justify="space-around" align="middle">
                        <div className="card-container" style={{ marginTop: '5%' }}>
                            <Row className="container" gutter={[16, 16]}>
                                <Col span={12}>
                                    <Typography style={{ color: 'white' }} className="card-question">{index + 1}. {JSON.stringify(questions[index].question)} </Typography>
                                    <Typography className="card-question">{Question_API}</Typography>
                                </Col>
                                {Option(questions[index], index)}
                            </Row>
                        </div>
                    </Row>
                </div>
                <Row justify="space-around" align="middle">
                <Button type="primary" onClick={changeQuestion} style={{ margin: '5%' }} shape="round" size={10}>Save & Next</Button>
                </Row>
                </div>
                :
                <>
                    <Typography style={{color:'white',fontSize:"20px",padding:10,marginTop:'8px'}} justify="space-around" align="middle">Your Score is -  {count} / 10</Typography>
                        <Row justify="space-around" align="middle">    
                        <Link to="/Review">
                            <Button type="primary" style={{ margin: '5%' }} shape="round" size={10} onClick={reviewCall}>Review</Button>
                        </Link>
                    </Row>
                </>}
        </div>
    )
}


