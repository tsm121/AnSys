import React, { Component } from 'react';
import { Form } from 'antd';
import TitleInput from "../form/TitleInput";
import DateSelect from "../form/DateSelect";
import TypeOfEventInput from "../form/TypeOfEventInput";
import DescriptionInput from "../form/DescriptionInput";
import UrgentOption from "../form/UrgentOption";
import AgeLimit from "../form/AgeLimit";


class Facebook extends Component {
    constructor(props){
        super(props)
        this.state = {
            urgent:false,
        }
    }

    handleUrgentCheckbox = (event) => {
        this.setState(() => ({
            urgent: event.target.checked
        }))

    }

    render() {
        const {urgent} = this.state

        return (
            <Form>

                <UrgentOption
                    label={"Hvis anmodningen haster"}
                    placeholder={"Haster"}
                    required={false}
                    handleUrgent={this.handleUrgentCheckbox}
                />

                <TitleInput
                    label={"Navn på event det skal lages anmodning til"}
                    placeholder={"Navn på event"}
                    required={true}
                />

                <DateSelect
                    label={"Velg tidspunkt for event"}
                    required={true}
                    urgent={urgent}

                />

                <TypeOfEventInput
                    placeholder={"Trykk eller skriv for å velge type event"}
                    label={"Velg type event"}
                    required={false}
                    max_tags={3}
                />

                <DescriptionInput
                    placeholder={"Gi en beskrivelse av anmodningen"}
                    label={"Beskrivelse"}
                    required={true}
                />

                <AgeLimit
                    placeholder={"Aldersgrense"}
                    label={"Skriv inn aldersgrense for event"}
                    required={false}
                    limitedInput={true}
                />

            </Form>
        );
    }
}

export default Facebook;
