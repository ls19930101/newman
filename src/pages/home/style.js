import styled from 'styled-components';
import bg1 from '../../statics/bg-1.jpg';
import music from '../../statics/music.png';
import nomusic from '../../statics/nomusic.png';
import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
0%{
   opacity: 0;
}

100%{
    opacity: 1;
}
`
export const HomeWrapper=styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
`

export const HomeBg=styled.div`
position: relative;
width: 100%;
height: 100%;
background: url(${bg1}) center no-repeat;
background-size: 100% auto;

`

export const Music=styled.div`
float: left;
position: fixed;
left: 6vw;
top: 3vh;
width: 36px;
height: 36px;
background: url(${music});
background-size: 100%;
opacity: 0.6;
&.nomusic{
    background: url(${nomusic});
    background-size: 100%;  
}
`

export const Chupin=styled.span`
position: absolute;
bottom: 12%;
left:50%;
width: 42vw;
margin-left:-21vw;
margin-bottom: -4vh;
animation:1s ${fadeIn};
opacity:0;
animation-delay:2.5s;
animation-fill-mode: forwards;
.pic{
   width:100%;
   height:100%;
}
`

export const Btn=styled.div`
position: absolute;
bottom: 30%;
left: 50%;
margin-left: -20vw;
margin-bottom: -14vh;
width: 40vw;
opacity:0;
animation:1s ${fadeIn};
animation-delay:2s;
animation-fill-mode: forwards;
.btn{
    width: 100%;
    height: 100%;
    
   
}
`

export const SloganWrapper=styled.div`
position: absolute;
top: 8%;
left: 50%;
width: 50vw;
margin-left: -25vw;
.slogan1{
    opacity: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 2vh;
    animation : 1s ${fadeIn} ;    
    animation-fill-mode: forwards;
    animation-delay: 0.3s;

}
.slogan2{
    opacity: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 1vh;
    animation : 1s ${fadeIn} ;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
} 
.slogan3{
    opacity: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 1vh;
    animation : 1s ${fadeIn} ;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
}
`
