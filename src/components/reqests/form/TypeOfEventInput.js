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
        const {label, placeholder, required, max_tags} = this.props
        const { getFieldDecorator } = this.props.form;

        return (

            <Form.Item required={required} label={label}>
                {getFieldDecorator("tags", {
                    rules: [
                        {
                            required: {required},
                            message: "Velg minst en tag!"
                        },
                        {
                            validator: (rule, value, callback) => {
                                if (value) {
                                    if (value.length > max_tags) {
                                        callback("Ikke velg flere enn " + max_tags.toString() + " tag(s)");
                                    } else if (value.length <= max_tags) {
                                        callback();
                                    }
                                }
                                return;
                            }
                        }
                    ]
                })(
                    <Select
                        placeholder={placeholder}
                        mode="tags"
                        style={{ width: '100%' }}

                    >
                        {children}
                    </Select>
                )}
            </Form.Item>
        );
    }
}

const WrapperTypeOfEvent = Form.create()(TypeOfEventInput);
export default WrapperTypeOfEvent;
