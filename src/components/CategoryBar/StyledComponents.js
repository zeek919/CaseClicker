import styled from 'styled-components';
import arrow from '../../assets/images/doubleArrow.png';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: min-content;
    padding: 10px;
    width: 50%;
    border-radius: 0 0 15px 15px;
    background: rgba(0, 0, 0, 0.3) 95%;
    text-transform: uppercase;
    color: white;
    border-bottom: 2px solid white;
    margin-top: 10px;
`;

export const Button = styled.button`
    border: none;
    color: white;
    background: none;
    height: 14px;
    width: 17px;
    background-image: url(${arrow});
    transform: rotateZ(${(props) => (props.rotated ? '180deg' : '0')});
`;
