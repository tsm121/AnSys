import React, { Component } from 'react';
import { Form, DatePicker, Radio, TimePicker, Row, Col  } from 'antd';
import moment from 'moment';
import locale from 'moment/locale/nb';

moment.locale("nb")


const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const timeFormat = 'HH:mm';
let dateLimit = moment().endOf('day').add(7,"days")


class DateSelect extends Component {
    constructor(props){
        super(props)
        this.state = {
            singleDate:true
        }
    }


    disabledDate(current) {

            return current && current < dateLimit;

    }

    handleRadioButton = (value) => {
        this.setState((state) => ({
            singleDate: !state.singleDate
        }))
    }


    selectDatePicker = () => {
        const {singleDate} = this.state
        const {urgent, placeholderSingleDate, placeholderMultipleDates} = this.props

        if (urgent) {
            dateLimit = moment().endOf('day')
        } else {
            dateLimit = moment().endOf('day').add(7,"days")
        }

        if (singleDate) {
            return (

                <DatePicker
                    placeholder={placeholderSingleDate}
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
                    placeholder={placeholderMultipleDates}
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
        const {label, required} = this.props
        const {singleDate} = this.state

        return (
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
        );
    }
}

export default DateSelect;
