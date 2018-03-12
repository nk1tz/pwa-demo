import React, { Component } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import Cards, { Card } from 'react-swipe-deck'



// import logo from './logo.svg';
import './App.css';

const PageBoxA = styled.div`
  background: linear-gradient(135deg, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%);
  width: 100vw;
  height: 100vh;
`;

const PageBoxB = styled.div`
  background: linear-gradient(45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
  width: 100vw;
  height: 100vh;
`;

const PageBoxC = styled.div`
  background: linear-gradient(to bottom, rgba(98,125,77,1) 0%, rgba(31,59,8,1) 100%);
  width: 100vw;
  height: 100vh;
`;

const PageBoxD = styled.div`
  background: linear-gradient(45deg, rgba(255,93,177,1) 0%, rgba(239,1,124,1) 100%);
  width: 100vw;
  height: 100vh;
`;

const PageBoxE = styled.div`
  background: linear-gradient(135deg, rgba(203,196,253,1) 0%, rgba(119,97,239,1) 100%);
  width: 100vw;
  height: 100vh;
`;

const PageBoxTitle = styled.h2`
  margin: 0;
  color: #626262;
  width: 100%;
  text-align: center;
`;

const Stack = styled(Cards)`
  margin: 20px auto;
  position: relative;
  width: 100vw;
  height: 100vw;
  overflow: hidden;
  border: 1px solid #e5e5e5;
`

const ThrowTile = styled(Card)`
  background-color: white;
  background-size: cover;
  position: absolute;
  background: linear-gradient(135deg, rgba(169,3,41,1) 0%, rgba(143,2,34,1) 44%, rgba(109,0,25,1) 100%);
  height: 60vw;
  width: 60vw;
  margin: 0 auto;
  transition: box-shadow .3s;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  cursor: pointer;
`

class App extends Component {

  action = str => console.log(str)

  render() {
    return (
      <div className="App">
        <SwipeableViews>
          <PageBoxA><PageBoxTitle>A</PageBoxTitle></PageBoxA>
          <PageBoxB>
            <PageBoxTitle>B</PageBoxTitle>
            <Stack onEnd={this.action('end')}>
              <ThrowTile
                onSwipeLeft={this.action('swipe left')}
                onSwipeRight={this.action('swipe right')}>
                <h2>1</h2>
              </ThrowTile>
              <ThrowTile
                onSwipeLeft={this.action('swipe left')}
                onSwipeRight={this.action('swipe right')}>
                <h2>2</h2>
              </ThrowTile>
              <ThrowTile
                onSwipeLeft={this.action('swipe left')}
                onSwipeRight={this.action('swipe right')}>
                <h2>3</h2>
              </ThrowTile>
              <ThrowTile
                onSwipeLeft={this.action('swipe left')}
                onSwipeRight={this.action('swipe right')}>
                <h2>4</h2>
              </ThrowTile>
            </Stack>
          </PageBoxB>
          <PageBoxC><PageBoxTitle>C</PageBoxTitle></PageBoxC>
          <PageBoxD><PageBoxTitle>D</PageBoxTitle></PageBoxD>
          <PageBoxE><PageBoxTitle>E</PageBoxTitle></PageBoxE>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
