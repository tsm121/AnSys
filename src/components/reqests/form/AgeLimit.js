import React, { Component } from 'react';
import { Form, InputNumber, Select } from 'antd';

const Option = Select.Option;

class AgeLimit extends Component {

    selectTypeOfInput = () => {
        const {limitedInput, placeholder} = this.props

        if (limitedInput) {
            return (

                <Select
                    showSearch
                    style={{ width: "10em" }}
                    placeholder={placeholder}
                >
                    <Option value={"ingen"}>Ingen</Option>
                    <Option value={"under_18"}>Under 18år</Option>
                    <Option value={"under_21"}>Under 21år</Option>
                    <Option value={"18"}>Over 18år</Option>
                    <Option value={"21"}>Over 21år</Option>
                </Select>

            )
        } else  {
            return (

                <InputNumber
                    min={0}
                    max={99}
                    placeholder={placeholder}
                    style={{width:"8em"}}

                />
            )
        }
    }

    render() {
        const {label, required} = this.props
        return (
            <Form.Item required={required} label={label}>

                {this.selectTypeOfInput()}

            </Form.Item>
        );
    }
}

export default AgeLimit;
