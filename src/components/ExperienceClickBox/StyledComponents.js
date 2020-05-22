import styled from 'styled-components';

export const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 3em;
    background-color: rgb(18, 39, 95);
`;

export const Loader = styled.div`
    background-color: rgb(25, 63, 168);
    width: ${(props) => `${props.length}%`};
    height: 80%;
`;
