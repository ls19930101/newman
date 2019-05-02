import React,{PureComponent} from 'react';
import {HomeWrapper,
        HomeBg,
        Music,
        Chupin,
        Btn    
} from './style';
import Title from './components/Title';
import chupin from '../../statics/chupin.png';
import btn from '../../statics/btn_start.png';
import music1 from '../../statics/music1.mp3';
import {Link} from 'react-router-dom';

class Home extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            isPlay:false
        }
    }
    
    render(){
        return (
                <HomeWrapper>
                   <HomeBg>
                       <Music
                             onClick={this.handleMusic}
                              className={!this.state.isPlay? 'nomusic':''}>
                       </Music>
                       {
                           this.state.isPlay?  <audio loop autoPlay="autoplay" src={music1} id="music1"></audio>
                                 : null
                       }
                      
                       <Title/>
                       <Link to="/detail">
                       <Btn>
                           <img className="btn" src={btn} alt="nobtn"></img>
                       </Btn>
                       </Link>
                       <Chupin>
                           <img className="pic" src={chupin} alt="123"></img>
                       </Chupin>
                   </HomeBg>
                </HomeWrapper>
        )
    }

    componentDidMount(){
        const storage=window.localStorage;
        let count=storage.getItem("count")||1;
        count++;
        storage.setItem("count",count);
        document.title=`我是第${count}位重温入团誓词的团员青年count`;
    }


    handleMusic=()=>{
        if(this.state.isPlay){
            this.setState({
                isPlay:false
            })
        
        }
        else
        this.setState({
            isPlay:true
        })
      
    }
}

export default Home;