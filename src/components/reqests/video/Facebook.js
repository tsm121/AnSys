import React, { Component } from 'react';
import { Form } from 'antd';
import TitleInput from "../form/TitleInput";
import DateSelect from "../form/DateSelect";
import TypeOfEventInput from "../form/TypeOfEventInput";
import DescriptionInput from "../form/DescriptionInput";
import UrgentOption from "../form/UrgentOption";
import AgeLimit from "../form/AgeLimit";
import RoomSelection from "../form/RoomSelection";
import OrganizerSelection from "../form/OrganizerSelection";
import PublishDate from "../form/PublishDate";


class Facebook extends Component {
    constructor(props){
        super(props)
        this.state = {
            urgent:false,
        }
    }

    handleUrgentCheckbox = (event) => {
        this.setState(() => ({
            urgent: event
        }))
        console.log("Recieved:",event)

    }

    render() {
        const {urgent} = this.state

        return (
            <Form>

                <UrgentOption
                    placeholder={"Anmodningen haster"}
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
                    placeholderSingleDate={"Dato for event"}
                    placeholderMultipleDates={['Starttid', 'Sluttid']}
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

                <RoomSelection
                    placeholder={"Trykk eller skriv for å velge rom"}
                    label={"Velg rom for event"}
                    required={false}
                    max_rooms={3}
                    singleSelection={false}
                />

                <OrganizerSelection
                    placeholder={"Trykk eller skriv for å velge arrangør"}
                    label={"Velg arrangør for event"}
                    required={false}
                    max_organizers={3}
                    singleSelection={true}
                />

                <PublishDate
                    placeholder={"Dato for publisering"}
                    label={"Velg dato og tid for publisering"}
                    required={true}
                />

            </Form>
        );
    }
}

export default Facebook;
