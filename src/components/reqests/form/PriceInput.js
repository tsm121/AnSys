import React, { Component } from 'react';
import { Form, Input, Col, Row } from 'antd';


class PriceInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:0
        }
    }

    render() {
        const {label, placeholder, required} = this.props
        return (
            <Form.Item required={required} label={label}>

                <Col>
                    <Input.Group>

                        <Row>
                            <Input
                                addonBefore={<div style={{marginRight:"2.35em"}}>Medlem</div>}
                                addonAfter="NOK"
                                placeholder={placeholder}
                                type={"number"}

                            />
                        </Row>

                        <Row>
                            <Input
                                addonBefore="Ikke-medlem"
                                addonAfter="NOK"
                                placeholder={placeholder}
                                type={"number"}

                            />
                        </Row>

                    </Input.Group>
                </Col>

            </Form.Item>
        );
    }
}

export default PriceInput;
