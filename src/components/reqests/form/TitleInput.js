import React, { Component } from 'react';
import { Form, Input } from 'antd';


class TitleInput extends Component {
    render() {
        const {label, placeholder, required} = this.props
        return (
                <Form.Item required={required} label={label}>

                <Input
                    id={"event-name"}
                    maxLength={100}
                    placeholder={placeholder}
                />
            </Form.Item>
        );
    }
}

export default TitleInput;
