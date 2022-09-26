import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    render() {
      return (
        <Container>
            <Element>
                <SSS1>severus007@naver.com</SSS1>
                <SSS2>
<img
width="100%"
height="200%"
src="http://m.pajuaqua.com/web/product/big/202106/0b736d7ae0aee1391ca45dd3d2e52b0d.jpg"
alt="SSS2"/>
</SSS2>
                <SSS3>
                    <h1>포트폴리오 과제🐟</h1>
                    <div>2022-9-26</div>
                </SSS3>
            </Element>
        </Container>
      );
    }
  }
  
export default Header;

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 260px;
    display: flex;
    flex-flow: row wrap;
`

const SSS1 = styled.div`
    order: 1;
    width: 100%;
    height: 30px;
    text-align: right;
    background-color: #AFEEEE;
`

const SSS2 = styled.div`
    order: 2;
    width: 200px;
    height: 85px;
`

const SSS3 = styled.div`
    order: 3;
    width: 880px;
    background-color: #E0FFFF;
    text-align: center;
`