import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Typography, Button } from 'antd';
import { CheckOutlined , CloseOutlined  } from '@ant-design/icons';
import "../styles/Card.css";
export default function Card() {
    return (
        <div className="card-container" style={{marginTop:'5%'}}>
            <Row className="container" gutter={[16, 16]}>
                <Col span={12}>
                    <Typography className="card-question">Question {1}/10</Typography>
                    <Typography className="card-question">Who is the CEO of Teslo asdasdasd asd aasd asdassndl aks ndkans kdnas dka sdjk sdn, k kjas ,d,mlj ad?</Typography>
                </Col>
                <Col span={12} style={{padding:'1%'}}>
                    <Col span={12}>
                        <Button type="primary" icon={false?<CheckOutlined style={{backgroundColor:'green'}}/>:< CloseOutlined style={{backgroundColor:'red'}}/>} style={{textAlign:'left',margin:'2%'}} shape="round" size={10}>NewYork</Button>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" icon={true?<CheckOutlined style={{backgroundColor:'green'}} />:<CloseOutlined CloseOutlined style={{backgroundColor:'red'}} />} style={{textAlign:'left',margin:'2%'}} shape="round" size={10}>London</Button>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" icon={true?<CheckOutlined style={{backgroundColor:'green'}} />:<CloseOutlined CloseOutlined style={{backgroundColor:'red'}} />} style={{textAlign:'left',margin:'2%'}}  shape="round" size={10}>America</Button>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" icon={true?<CheckOutlined style={{backgroundColor:'green'}} />:<CloseOutlined CloseOutlined style={{backgroundColor:'red'}} />} style={{textAlign:'left',margin:'2%'}} shape="round" size={10}>Elon musk</Button>
                    </Col>
                </Col>
            </Row>
        </div>

    )
}

