import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



class Navigation extends Component {
    render() {
      return (
        <Nav>
            <NavList>
                <NavItem><Link to='/about'>About</Link></NavItem>
                <NavItem><Link to='/board'>Projects</Link></NavItem>
                <NavItem><Link to='/skills'>Skills</Link></NavItem>
                <NavItem><Link to='/mypage'>Contact</Link></NavItem>
                <NavItem><Link to='/'>Home</Link></NavItem>
            </NavList>
        </Nav>
      );
    }
  }
  
export default Navigation;



const Nav = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #d1d8e4;
    margin-bottom: 5px;
    
`

const NavList = styled.ul`
    width: 1000 px;
    display: flex;
    margin: 1 auto;
    background-color: #AFEEEE;
    display: flex;
    flex-flow: row wrap;
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavItem = styled.li`
    width: 80px;
    margin-left: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
`
