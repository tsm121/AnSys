import React, { Component } from 'react';
import { Form, Checkbox, Popconfirm, message, Icon } from 'antd';

class UrgentOption extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkedUrgent:false,
            visible: false,
        }
    }

    changeCondition = (value) => {
        this.setState({ checkedUrgent: value })
    }

    confirm = () => {
        this.setState({ visible: false })
        message.open({
            content:<b>DET BRENNER!</b>,
            icon: <Icon type="fire" theme={"filled"} style={{ color: '#f5222d', fontSize:"1.5em" }}/>
        })
        this.handleChecked()
    }

    cancel = () => {
        this.setState({ visible: false })
        message.open({
            content:<b>Så bra!</b>,
            icon: <Icon type="smile" theme={"filled"} style={{ color: '#55c51f', fontSize:"1.5em" }}/>
        })
    }

    handleVisibleChange = (visible) => {
        if (!visible) {
            this.setState({visible})
            return;
        }
        if (this.state.checkedUrgent) {
            this.confirm(); // next step
        } else {
            this.setState({visible})
        }
    }

    handleChecked = () => {
        this.setState((state) => ({
            checkedUrgent: !state.checkedUrgent
        }))
    }

    render(){
        const {label, placeholder, required} = this.props
        const {checkedUrgent, visible} = this.state
        return (
            <Form.Item required={required} label={label}>

                <Popconfirm
                    title={<h4 style={{color:"#f5222d"}}>Dette alternativet gjelder <b>BARE</b> <br/>hvis det brenner på dass!</h4>}
                    visible={visible}
                    onVisibleChange={this.handleVisibleChange}
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="DET BRENNER!"
                    cancelText={"Egentlig ikke ..."}
                    placement={"topLeft"}
                    icon={<Icon type="frown" style={{ color: '#f5222d', fontSize:"1.1em" }}/>}
                >

                    <Checkbox
                        id="urgent-checkbox"
                        checked={checkedUrgent}
                    >

                        {placeholder}

                    </Checkbox>

                </Popconfirm>

            </Form.Item>
        );
    }
}

export default UrgentOption;
