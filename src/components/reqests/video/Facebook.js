import React, { Component } from 'react';
import { Form } from 'antd';
import TitleInput from "../form/TitleInput";
import DateSelect from "../form/DateSelect";


class Facebook extends Component {
    render() {
        return (
            <Form>
                <TitleInput
                    label={"Navn på event det skal lages anmodning til"}
                    placeholder={"Navn på event"}
                    required={true}
                />

                <DateSelect
                    label={"Velg tidspunkt for event"}
                    required={true}
                />
            </Form>
        );
    }
}

export default Facebook;
