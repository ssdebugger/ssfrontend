
import { Star } from 'react-feather';
import { RatingsContainer } from 'components/card/style'


const Rating = (props) => {

    return(
        <RatingsContainer>
            <Star className="filled" width={16} height={16} />
            <Star className="filled" width={16} height={16} />
            <Star className="filled" width={16} height={16} />
            <Star className="filled" width={16} height={16} />
            <Star className="default" width={16} height={16} />
        </RatingsContainer>
    )

}

export default Rating;