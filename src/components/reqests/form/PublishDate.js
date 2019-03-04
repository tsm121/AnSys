import React, { Component } from 'react';
import {Form, DatePicker, TimePicker, Row, Col} from 'antd';
import moment from 'moment';
import locale from 'moment/locale/nb';

moment.locale("nb")


const dateFormat = 'DD/MM/YYYY';
const timeFormat = 'HH:mm';
let dateLimit = moment().endOf('day')


class PublishDate extends Component {

    disabledDate(current) {
        return current && current < dateLimit;
    }


    render() {
        const {label, required, placeholder} = this.props

        return (
            <Form.Item required={required} label={label}>
                
                <Col>
                    <Row>
                        <DatePicker
                            placeholder={placeholder}
                            /*defaultValue={moment().endOf('day').add(5,"days")}*/
                            // defaultPickerValue={moment().day(7+7+7+5)}
                            disabledDate={this.disabledDate}
                            format={dateFormat}
                            locale={locale}
                            showTime={false}
                            showToday={false}
                        />

                        <TimePicker
                            // defaultValue={moment('16:00', timeFormat)}
                            defaultOpenValue={moment("08:00", timeFormat)}
                            placeholder={"Tidspunkt"}
                            format={timeFormat} />
                    </Row>
                </Col>

            </Form.Item>
        );
    }
}

export default PublishDate;
