import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';


class Navigation extends Component {
    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (

            <div>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="home">
                        <Icon type="home" />Hjem
                        <NavLink exact activeClassName="current" to='/'/>
                    </Menu.Item>

                    <Menu.Item key="message">
                        <Icon type="message" /> Anmodning
                        <NavLink exact activeClassName="current" to='/about' />
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navigation;
