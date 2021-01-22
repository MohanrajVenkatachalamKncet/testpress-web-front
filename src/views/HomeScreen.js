import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

//Import Other Elements
import { setUserName } from '../store/actions.js'

//Importing CSS and Ant Designs
import { Form, Input, Button, Typography } from 'antd';
export default function HomeScreen() {
    
    //Redux Statezz
    const { username } = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log(username);
    }, [])

    //Layout 
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };

    //Tail Layout
    const tailLayout = {
        wrapperCol: { offset: 8, span: 8 },
    };
    return (
        <div className="wrapper">
            <Form
                style={{ padding: '5%' }}
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
            >
                <Typography style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Enter Details To Attend Quiz</Typography>
                <Form.Item
                    label="Enter Your Name:"
                    name="Name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                    style={{ padding: '2%' }}>
                    <Input value={username} onChange={e => dispatch(setUserName(e.target.value))} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Link to="/Question">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}
