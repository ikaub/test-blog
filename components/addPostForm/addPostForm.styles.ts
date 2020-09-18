import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 2rem;
`;

export const TitleInput = styled.input`
    border: none;
    border-bottom: 2px solid black;
    outline: none;
    letter-spacing: 1px;
    margin-bottom: 2rem;
`;

export const BodyInput = styled.textarea`
    margin-bottom: 2rem;
`;

export const SubmitButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    outline: none;
    font-size: 1.2rem;
    padding: 5px 8px;
    min-width: 100px;
    border-radius: 6px;
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, .4);
    transition: .5s;
    margin-bottom: 2rem;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 3px 13px 1px rgba(0, 0, 0, .35);
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 0 7px 2px rgba(0, 0, 0, .5);
    }
`;