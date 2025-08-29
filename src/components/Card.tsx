import React from 'react';
import styled from 'styled-components';
import TextType from './splittext';

const Card = ({ele,head,sub,icon}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <h2 className='text-center' >
            {/* {ele} */}
            <div className="flex  justify-center text-3xl text-center mx-auto mb-4">{icon}</div>
            <div className="text-2xl font-semibold mb-4">
              {head}
              {/* <TextType text={head}/> */}
            </div>
           <div className="text-justify">
             {sub}
           </div>
        </h2>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    height: 340px;
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
  }

  .card h2 {
    z-index: 1;
    color: white;
    padding-left:12px;
    padding-right:12px;

//     font-size: 2em;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    ;
    inset: 5px;
    border-radius: 15px;
  }  
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */`;

export default Card;
