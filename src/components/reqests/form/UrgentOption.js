import React, { Component } from 'react';
import { Form, Checkbox } from 'antd';


class UrgentOption extends Component {
    render() {
        const {label, placeholder, required, handleUrgent} = this.props
        return (
            <Form.Item required={required} label={label}>

                <Checkbox
                    id="urgent-checkbox"
                    onChange={handleUrgent}
                >
                    {placeholder}
                </Checkbox>

            </Form.Item>
        );
    }
}

export default UrgentOption;
