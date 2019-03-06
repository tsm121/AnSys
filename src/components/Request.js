import React, { Component } from 'react';
import RequestSelector from "./RequestSelector";
import { Col, Row, Card, Modal, Button, Icon } from 'antd';



class Request extends Component {

    renderHelpButton = () => {
        return (
            <Icon
                type="question-circle"
                onClick={this.renderHelpModal}
                style={{fontSize:"1.5em"}}
            />
        )
    }

    renderHelpModal = () => {


        Modal.info({
            title: (<h4>Hvorfor må jeg fylle inn dette?</h4>),
            okText: "Ok",
            icon: (<Icon theme={"filled"} type="question-circle"/>) ,
            maskClosable: true,
            content: (
                <div>
                    <p>some messages...some messages...some messages...some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    }

    render() {
        return (
            <Row>
                <Col span={6} />

                <Col span={12}>

                    <Card
                        title={
                            <h1>Type anmodning</h1>
                        }
                        extra={this.renderHelpButton()}
                        bordered={false}
                    >
                        <RequestSelector/>


                    </Card>
                </Col>

                <Col span={6} />
            </Row>
        );
    }
}

export default Request;
