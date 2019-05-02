import React,{PureComponent} from 'react';
import { DetailWrapper,
         DetailBg,
         Music,
         InfoWrapper,
         Complete,
         ShareBtn
        }  from '../detail/style';
import music2 from '../../statics/music2.mp3';
import info1 from '../../statics/info1.png';
import info2 from '../../statics/info2.png';
import info3 from '../../statics/info3.png';
import info4 from '../../statics/info4.png';
import info5 from '../../statics/info5.png';
import info6 from '../../statics/info6.png';
import info7 from '../../statics/info7.png';
import share from '../../statics/share.png';


class Detail extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            isOn:true,
            
        }
        
    }
    render(){
        const storage=window.localStorage;
        let count=storage.getItem("count")||1;
        count++;
        storage.setItem("count",count);
        
        return (
              <DetailWrapper>
                  <DetailBg>
                    <Music
                        onClick={this.handleMusic}
                        className={!this.state.isOn? 'nomusic':''}>
                    </Music>
                    {
                        this.state.isOn?  <audio loop autoPlay="autoplay" src={music2} id="music2"></audio>
                            :  <audio loop autoPlay="autoplay" muted src={music2} id="music2"></audio>
                    }
                        <InfoWrapper>
                            <img className="info1" src={info1} alt=""></img>
                            <img className="info2" src={info2}  alt=""></img>
                            <img className="info3" src={info3}  alt=""></img>
                            <img className="info4" src={info4}  alt=""></img>
                            <img className="info5" src={info5}  alt=""></img>
                            <img className="info6" src={info6}  alt=""></img>
                            <img className="info7" src={info7}  alt=""></img>
                        </InfoWrapper>
                        <Complete>
                        我是第
                        <span className="count">{" "+count+" "}</span>
                         位重温入团誓词的团员青年
                        </Complete>
                            <ShareBtn>
                                <img className="btn" src={share} alt=""></img>
                            </ShareBtn>
                  </DetailBg>
              </DetailWrapper>
        )
    }

    handleMusic=()=>{
        if(this.state.isOn){
            this.setState({
                isOn:false
            })
        
        }
        else
        this.setState({
            isOn:true
        })
      
    }
}
export default Detail;