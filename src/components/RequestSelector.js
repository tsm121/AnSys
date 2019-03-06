import React, { Component } from 'react';
import { Select } from 'antd';
import Examples from "./reqests/Examples";
const { Option, OptGroup } = Select;




class RequestSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            requestSelected: ""
        }
    }

    handleChange = (value) => {
        console.log(value)

        this.setState((state, props) => ({
            requestSelected: value
        }))

    }

    renderSelection = () => {
        const {requestSelected} = this.state
        switch (requestSelected) {
            case "examples":
                return (
                    <Examples/>
                )
            default: return <h1>Vennligst velg en type anmodning</h1>
        }
    }

    render() {
        return (
            <div>
                <Select
                    placeholder="Velg type anmodning"
                    style={{ width: 200 }}
                    onChange={this.handleChange}
                >

                    <OptGroup label="DEV">
                        <Option value="examples">EXAMPLES</Option>
                    </OptGroup>

                    <OptGroup label="MG-Video">
                        <Option value="facebook">Facebook Video</Option>
                        <Option value="instagram">Instagram Video</Option>
                        <Option value="snapchat">Snapchat Video</Option>
                        <Option value="other-video">Annen Video</Option>
                        <Option value="other">Annet</Option>
                    </OptGroup>

                    <OptGroup label="MG:Web">
                        <Option value="request">TypeOfRequest</Option>
                    </OptGroup>

                    <OptGroup label="Layout">
                        <Option value="request">TypeOfRequest</Option>
                    </OptGroup>

                    <OptGroup label="Marked">
                        <Option value="request">TypeOfRequest</Option>
                    </OptGroup>

                    <OptGroup label="Redaksjonen">
                        <Option value="request">TypeOfRequest</Option>
                    </OptGroup>

                    <OptGroup label="STØNT">
                        <Option value="request">TypeOfRequest</Option>
                    </OptGroup>

                    <OptGroup label="Styret">
                        <Option value="request">TypeOfRequest</Option>
                    </OptGroup>
                </Select>

                {this.renderSelection()}


            </div>
        );
    }
}

export default RequestSelector;
