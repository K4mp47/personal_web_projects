import styled from 'styled-components';

const color = [
    '#21201F', // background
    '#090909', // shadows
    '#CFC9D1', // text
    '#FCDF57', // border image, Titles
    '#31241B', // other text
    '#544652', // image-background
];

export const DivBar = styled.div`
    position: relative;
    background-color: ${color[0]};
    display: flex;
    justify-content: left;
    width: 100%;
    height: 75%;
    box-shadow: 0 0 20px 20px #090909;
`;

export const DivBackground = styled.div`
    background-color: #21201F;
    display: flex;
    justify-content: left;
    width: 100%;
    height: 25%;
    z-index: -1;
`;

export const DivCentered = styled.div`
    background-color: #21201F;
    position: absolute;
    top: 10%;
    left: 10%;
    display: flex;
    justify-content: left;
    width: 80%;
    height: 80%;
    box-shadow: 0 0 20px 20px #090909;
    z-index: 2;
    animation: 1s cubic-bezier(0.42, 0, 0.5, 1.42) 0s 1 normal none running enter;
`;

export const DivPresentation = styled.div`
    background-color: ${color[0]};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: left;
    width: 24%;
    height: 100%;
    z-index: 5;
    box-shadow: 0 0 5px 5px #090909;
`;

export const DivFirstLook = styled.div`
    background-color: ${color[0]};
    color: ${color[3]};
    font-family: 'Kanit';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
    height: 24%;
    z-index: 4;
`;

export const Quote = styled.div`
    background-color: transparent;
    color: ${ color[2]};
    text-align: left;
    display: flex;
    font-family: 'Kanit'; 
    font-size: 0.9rem;
    margin: 20% 0 10% 5%;
    align-items: center;
    width: 90%;
    height: 100%;
`;

export const MainTitle = styled.div`
    background-color: transparent;
    color: ${ color[3]};
    text-align: right;
    display: flex;
    font-family: 'Kanit'; 
    font-size: 2.5rem;
    font-weight: bold;
    margin: 10% 0 0 10%;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const DivMainContent = styled.div`
    background-color: ${color[2]};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: left;
    width: 100%;
    height: 100%;
    z-index: 3;
`;

export const DivColumn = styled.div`
    background-color: ${color[3]};
    background:
      conic-gradient(at 10% 50%,#0000 75%,${color[0]} 0),
      conic-gradient(at 10% 50%,#0000 75%,${color[0]} 0) calc(1*10px) calc(3*10px),
      conic-gradient(at 10% 50%,#0000 75%,${color[0]} 0) calc(2*10px) calc(1*10px),
      conic-gradient(at 10% 50%,#0000 75%,${color[0]} 0) calc(3*10px) calc(4*10px),
      conic-gradient(at 10% 50%,#0000 75%,${color[0]} 0) calc(4*10px) calc(2*10px),
      conic-gradient(at 50% 10%,#0000 75%,${color[0]} 0) 0 calc(4*10px),
      conic-gradient(at 50% 10%,#0000 75%,${color[0]} 0) calc(1*10px) calc(2*10px),
      conic-gradient(at 50% 10%,#0000 75%,${color[0]} 0) calc(2*10px) 0,
      conic-gradient(at 50% 10%,#0000 75%,${color[0]} 0) calc(3*10px) calc(3*10px),
      conic-gradient(at 50% 10%,#0000 75%,${color[0]} 0) calc(4*10px) calc(1*10px),
      ${color[3]};
    background-size: 50px 50px;
    position: absolute;
    top: 0%;
    left: 24%;
    display: flex;
    justify-content: left;
    width: 8%;
    height: 100%;
    z-index: 3;
    box-shadow: 0 0 20px 20px #090909;
    filter: blur(1px);
`;

export const ImageContainer = styled.div`
    background-color: ${color[3]};
    position: absolute;
    top: 10%;
    left: 30%;
    display: flex;
    justify-content: left;
    width: 28%;
    height: 48%;
    z-index: 4;
    box-shadow: 0 0 2px 2px ${color[3]};
`;

export const Filter = styled.div`
    background-color: ${color[5]};
    position: absolute;
    top: 0;
    opacity: 0.6;
    left: 0;
    display: flex;
    justify-content: left;
    width: 100%;
    height: 100%;
    
`;

export const ImageCreator = styled.div`
    background-image: url('personal_image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 5%;
    left: 5%;
    display: flex;
    justify-content: left;
    width: 90%;
    height: 90%;
    z-index: 4;
`;

export const DivDescription = styled.div`
    background-color: ${color[3]};
    position: absolute;
    top: 76%;
    left: 24%;
    display: flex;
    justify-content: left;
    width: 76%;
    height: 24%;
    z-index: 4;
    box-shadow: 0 0 10px 10px ${color[0]};
`;

export const PersonalDescr = styled.div`
    background-color: ${color[3]};
    position: absolute;
    top: 7%;
    left: 1.1rem;
    display: flex;
    justify-content: left;
    width: 45%;
    height: 80%;
    z-index: 6;
    border: 2px solid ${color[0]}; 
    font-family: 'Kanit'; 
    font-size: 0.73rem;
    padding: 5px;
    font-weight: bold;
`;

export const ContainerAbility = styled.div`
    width: 20rem;
    height: 0.3rem;
    border-radius: 5px;
    display: flex;
    margin-bottom: 1rem;
`;

export const SpanY = styled.div`
    background-color: ${color[5]};
    width: 8rem;
    height: 0.5rem;
    border-radius: 5px;
`;

export const SpanN = styled.div`
    background-color: ${color[0]};
    width: 10rem;
    height: 0.5rem;
    border-radius: 5px;
`;

export const DivAbilities = styled.div`
    background-color: ${color[3]}; 
    position: absolute;
    top: 15%;
    left: 50%;
    padding-left: 20px;
    width: 45%;
    height: 70%;
    z-index: 6;
    font-family: 'Kanit'; 
    font-size: 0.6rem;
    font-weight: bold;
`;

