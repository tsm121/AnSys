import React, { Component } from 'react';
import { Form, Select } from 'antd';
import TypeOfEvents from '../../data/TypeOfEvents'

const Option = Select.Option;
const children = [Object.entries(TypeOfEvents).map(([type, values]) => {
    return (
        <Option key={values["key"]} value={values["value"]}>
            {type}
        </Option>
    )
})]


class TypeOfEventInput extends Component {


    render() {
        const {label, placeholder, required} = this.props
        return (
            <Form.Item required={required} label={label}>

                <Select
                    placeholder={placeholder}
                    mode="multiple"
                    style={{ width: '100%' }}
                >
                    {children}
                </Select>

            </Form.Item>
        );
    }
}

export default TypeOfEventInput;
