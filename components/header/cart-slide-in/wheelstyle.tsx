import styled from 'styled-components'

export const WheelContainer = styled.div`
    font-family: 'Open Sans';
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background: rgb(60, 60, 242);
    background: linear-gradient(
        90deg,
        rgba(60, 60, 242, 1) 0%,
        rgba(98, 245, 230, 1) 52%,
        rgba(60, 60, 242, 1) 100%
    );
    background-size: cover;
    position: relative;
    width: 500px;
    height: 500px;
    &:after {
        position: absolute;
        content: '';
        width: 32px;
        height: 32px;
        background: url('arrow-left.png') no-repeat;
        background-size: 32px;
        right: -30px;
        top: 50%;
        transform: translateY(-50%);
    }
`

export const Wheel = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    font-weight: bold;
    border-radius: 50%;
    border: 10px solid #fff;
    overflow: hidden;
    transition: all ease 5s;
`

export const ItemHolder = styled.div``

export const WheelItem = styled.span`
    width: 50%;
    height: 50%;
    display: inline-block;
    position: absolute;
    color:black;
`

export const Spin = styled.button``
