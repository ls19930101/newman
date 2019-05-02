import React ,{PureComponent} from 'react';
import {SloganWrapper} from '../style';
import slogan1 from '../../../statics/slogan-1.png';
import slogan2 from '../../../statics/slogan-2.png';
import slogan3 from '../../../statics/slogan-3.png';

class Title extends PureComponent{
    render(){
        return (
            <SloganWrapper>
                <img className="slogan1" src={slogan1} alt=""></img>
                <img className="slogan2" src={slogan2} alt=""></img>
                <img className="slogan3" src={slogan3} alt=""></img>
            </SloganWrapper>
        )
    }
}

export default Title;