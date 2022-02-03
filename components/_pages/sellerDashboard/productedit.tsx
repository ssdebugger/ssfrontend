import { ImageContainer, ImagesHolder, ImageBox, DetailsContainer,MenuIcon } from './style'
import { ArrowLeft,ArrowRight } from 'react-feather'



const ProductEdit = () => {

    return (
        <DetailsContainer>
            <ImagesHolder>
                <ImageBox>
                
                <ImageContainer src='./static/images/img1.jpg' />

                <ImageContainer src='./static/images/img1.jpg' />

                <ImageContainer src='./static/images/img1.jpg' />

                 <ImageContainer src='./static/images/img1.jpg' />
                </ImageBox>
            </ImagesHolder>


        </DetailsContainer>
    )
}

export default ProductEdit;
