import React, { Component } from 'react';
import { Form, DatePicker, Radio, TimePicker, Row, Col  } from 'antd';
import moment from 'moment';
import locale from 'moment/locale/nb';

moment.locale("nb")


const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const timeFormat = 'HH:mm';


class DateSelect extends Component {
    constructor(props){
        super(props)
        this.state = {
            singleDate:true
        }
    }


    disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day').add(5,"days");
    }

    handleRadioButton = (value) => {
        this.setState((state) => ({
            singleDate: !state.singleDate
        }))
    }


    selectDatePicker = () => {
        const {singleDate} = this.state

        if (singleDate) {
            return (

                <DatePicker
                    placeholder={"Dato for event"}
                    /*defaultValue={moment().endOf('day').add(5,"days")}*/
                    // defaultPickerValue={moment().day(7+7+7+5)}
                    disabledDate={this.disabledDate}
                    format={dateFormat}
                    locale={locale}
                    showTime={false}
                    showToday={false}
                />

            )
        } else {
            return (

                <RangePicker
                    placeholder={['Starttid', 'Sluttid']}
                    /*defaultValue={[
                        moment().endOf('day').add(5,"days"),
                        moment().endOf('day').add(8,"days")]}*/
                    /*defaultPickerValue={[moment().day(7+7+7+5), moment().day(7+7+7+7)]}*/
                    disabledDate={this.disabledDate}
                    format={dateFormat}
                    locale={locale}
                    showTime={false}
                    showToday={false}
                />

            )
        }
    }

    render() {
        const {label, placeholder, required} = this.props
        const {singleDate} = this.state
        return (
            <div>
                <Form.Item required={required} label={label}>
                    <Col>

                        <Row>
                            <Radio.Group
                                defaultValue={singleDate ? "single-date" : "date-range"}
                                buttonStyle="solid"
                                onChange={this.handleRadioButton}
                            >
                                <Radio.Button value="single-date">En dag</Radio.Button>
                                <Radio.Button value="date-range">Flere dager</Radio.Button>
                            </Radio.Group>
                        </Row>

                        <Row>
                            {this.selectDatePicker()}
                            <TimePicker
                                // defaultValue={moment('16:00', timeFormat)}
                                defaultOpenValue={moment("16:00", timeFormat)}
                                placeholder={"Tidspunkt"}
                                format={timeFormat} />
                        </Row>

                    </Col>
                </Form.Item>
            </div>
        );
    }
}

export default DateSelect;
