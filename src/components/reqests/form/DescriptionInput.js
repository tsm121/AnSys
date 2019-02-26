import React, { Component } from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;

class DescriptionInput extends Component {
    render() {
        const {label, placeholder, required} = this.props
        return (
            <Form.Item required={required} label={label}>

                <TextArea
                    id="request-description"
                    placeholder={placeholder}
                    autosize={{ minRows: 2, maxRows: 6 }}
                />

            </Form.Item>
        );
    }
}

export default DescriptionInput;
