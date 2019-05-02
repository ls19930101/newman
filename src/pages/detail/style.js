import styled from 'styled-components';
import bg2 from '../../statics/bg-2.png';
import music from '../../statics/music.png';
import nomusic from '../../statics/nomusic.png';
import { keyframes } from 'styled-components';

export const Move = keyframes`
0%{
    top: 12vh;
 }
 
 50%{
    top: 6vh;
 }
 100%{
    top: 12vh;
 }
`

export const fadeIn = keyframes`
0%{
   opacity: 0;
}

100%{
    opacity: 1;
}
`
export const fadeOut = keyframes`
0%{
    opacity: 1;
 }
 
 100%{
     opacity: 0;
 }
`

export const  DetailWrapper=styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
`

export const DetailBg=styled.div`
position: relative;
width: 100%;
height: 100%;
background: url(${bg2}) center no-repeat;
background-size: 100% auto;
`
export const Music=styled.div`
float: left;
position: fixed;
left: 4vw;
top: 2vw;
width: 8vw;
height: 8vw;
background: url(${music});
background-size: 100%;
opacity: 0.6;
&.nomusic{
    background: url(${nomusic});
    background-size: 100%;  
}
`
export const InfoWrapper=styled.div`
position: absolute;
width: 62vw;
left: 50vw;
top: 24vh;
margin-left: -31vw;
margin-top: 1.3vh;
animation: 1s ${fadeOut} ease-out;
animation-delay:26s;
animation-fill-mode: forwards;
.info1{
opacity: 0;
margin-bottom:1.5vh;
width: 100%;
animation: 1s ${fadeIn} ease-in;
animation-fill-mode: forwards;
}
.info2{
    opacity: 0;
    margin-bottom:1vh;
    width: 100%;
    animation: 1s ${fadeIn} ease-in;
    animation-fill-mode: forwards;
    animation-delay:6s;
}
.info3{
    opacity: 0;
    margin-bottom:1vh;
    width: 100%;
    animation: 1s ${fadeIn} ease-in;
    animation-fill-mode: forwards;
    animation-delay:10s;
}
.info4{
    opacity: 0;
    margin-bottom:1vh;
    width: 100%;
    animation: 1s ${fadeIn} ease-in;
    animation-fill-mode: forwards;
    animation-delay:14s;
}
.info5{
    opacity: 0;
    margin-bottom:1vh;
    width: 100%;
    animation: 1s ${fadeIn} ease-in;
    animation-fill-mode: forwards;
    animation-delay:18s;
}
.info6{
    opacity: 0;
    margin-bottom:1vh;
    width: 100%;
    animation: 1s ${fadeIn} ease-in;
    animation-fill-mode: forwards;
    animation-delay:21s;
}
.info7{
    opacity: 0;
    margin-bottom:1vh;
    width: 100%;
    animation: 1s ${fadeIn} ease-in;
    animation-fill-mode: forwards;
    animation-delay:24s;
}
`
export const Complete=styled.div`
opacity: 0;  
position: absolute;
left: 50%;
top: 30vh;
width: 68vw;
margin-left: -34vw;
font-size: 7vw;
color: #fff;
line-height: 5.5vh;
animation: 1s ${fadeIn} ease-in;
animation-fill-mode: forwards;
animation-delay: 28s;
.count{
    color:#fbff03;
}
`

export const ShareBtn=styled.button`
opacity:0;
position: absolute;
bottom:12vh;
left:50%;
width:80vw;
margin-left:-40vw;  
animation: 0.5s ${fadeIn} ease-in;
animation-fill-mode: forwards;
animation-delay: 29s;
.sharebtn{
width:100%;
height: 100%;
}
`
export const Hand=styled.div`
position:absolute;
top:6vh;
right:4vw;
width:12vw;
animation: 2s ${Move} ease-in infinite;
.hand{
width:100%;
height:100%;
}
`