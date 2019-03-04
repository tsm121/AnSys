import React, { Component } from 'react';
import { Form, Select } from 'antd';
import Organizers from '../../data/Organizers'

const Option = Select.Option;
const children = [Object.entries(Organizers).map(([type, values]) => {
    return (
        <Option key={values["key"]} value={values["value"]}>
            {type}
        </Option>
    )
})]


class OrganizerSelection extends Component {

    selectTypeOfInput = () => {
        const {label, placeholder, required, max_organizers, singleSelection} = this.props
        const { getFieldDecorator } = this.props.form;

        if (singleSelection) {
            return (

                <Form.Item required={required} label={label}>
                    <Select
                        placeholder={placeholder}
                        mode={"default"}
                        style={{ width: '100%' }}
                    >
                        {children}
                    </Select>
                </Form.Item>
            )
        } else {
            return (

                <Form.Item required={required} label={label}>
                    {getFieldDecorator("tags", {
                        rules: [
                            {
                                required: {required},
                                message: "Velg minst en arrangør!"
                            },
                            {
                                validator: (rule, value, callback) => {
                                    if (value) {
                                        if (value.length > max_organizers) {
                                            callback("Ikke velg mer enn " + max_organizers.toString() + " arrangører!");
                                        } else if (value.length <= max_organizers) {
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
                            mode={"multiple"}
                            style={{ width: '100%' }}
                            notFoundContent={"Ingen gjeng funnet ved det navnet"}

                        >
                            {children}
                        </Select>
                    )}

                </Form.Item>

            )
        }
    }

    render() {
        return (
            <Form.Item>
                {this.selectTypeOfInput()}
            </Form.Item>
        );
    }
}

const WrapperOrganizerSelection = Form.create()(OrganizerSelection);
export default WrapperOrganizerSelection;
