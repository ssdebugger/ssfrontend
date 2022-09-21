import {
    WheelContainer,
    Wheel,
    WheelItem,
    ItemHolder,
    Spin,
} from './wheelstyle'

const SpinWheel = () => {
    return (
        <WheelContainer>
            <Wheel>
                <ItemHolder>
                    <WheelItem className="span1">Iron Man</WheelItem>
                    <WheelItem className="span2">
                        <b>7500</b>
                    </WheelItem>
                    <WheelItem className="span3">
                        <b>Bat Man</b>
                    </WheelItem>
                </ItemHolder>
                <ItemHolder>
                    <WheelItem>
                        <b>Iron Man2</b>
                    </WheelItem>
                    <WheelItem>
                        <b>75002</b>
                    </WheelItem>
                    <WheelItem>
                        <b>Bat Man2</b>
                    </WheelItem>
                </ItemHolder>
            </Wheel>
            <Spin>Spin</Spin>
            <style jsx global>
                {`
                    .span1 {
                        clip-path: polygon(100% 0, 0 0, 50% 100%);
                        background-color: #fffb00;
                        transform: translate(-50%, -50%) rotate(-270deg);
                        
                        top: 0;
                        left: 120px;
                    }
                    .span2{
                        clip-path: polygon(100% 50%, 50% 0, 0 100%);
                        background-color: #ff4fa1;
                        top: 120px;
                        right: 0;
                      }
                      .span3{
                        clip-path: polygon(0 100%, 100% 100%, 50% 1%);
                        background-color: #ffaa00;
                        bottom: 0;
                        left: 120px;
                      }
                `}
            </style>
        </WheelContainer>
    )
}

export default SpinWheel
