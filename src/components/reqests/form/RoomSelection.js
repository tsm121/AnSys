import React, { Component } from 'react';
import { Form, Select } from 'antd';
import Rooms from '../../data/Rooms'

const Option = Select.Option;
const children = [Object.entries(Rooms).map(([type, values]) => {
    return (
        <Option key={values["key"]} value={values["value"]}>
            {type}
        </Option>
    )
})]


class RoomSelection extends Component {

    selectTypeOfInput = () => {
        const {label, placeholder, required, max_rooms, singleSelection} = this.props
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
                                message: "Velg minst ett rom!"
                            },
                            {
                                validator: (rule, value, callback) => {
                                    if (value) {
                                        if (value.length > max_rooms) {
                                            callback("Ikke velg mer enn " + max_rooms.toString() + " rom!");
                                        } else if (value.length <= max_rooms) {
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
                            mode={"tags"}
                            style={{ width: '100%' }}

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

const WrapperRoomSelection = Form.create()(RoomSelection);
export default WrapperRoomSelection;
