import {
    MainContainer,
    TestimonialContainer,
    TestimonialHolder,
    TestimonialQuote,
    TestimonialQuoteHolder,
    TestimonialText,
    TestimonialTextHolder,
    UserText,
} from './style'
import { User } from 'react-feather'
import { SubHeading } from '@/components/typography/heading'

const CustomerTestimonial = () => {
    var count=0;
    const ScrollFunction = () => {
        let container=window.document.getElementById('testcontainer')
        let width=window.innerWidth
        if(width+count*width<=container.scrollWidth){
        count+=1   
        container.scrollBy(window.innerWidth,0)
        console.log(container.scrollWidth,window.innerWidth)
        }
        else{
            console.log('end')
        }
    }
    return (
        <>
            <SubHeading margin="0.5rem 0rem 1rem 25%">
                What our customers are saying ..
            </SubHeading>
            <TestimonialContainer id='testcontainer' onClick={ScrollFunction}>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Great for when you don`&#39;`t want to deal with the
                                mess, but want to stay classy AND sustainable.
                                Recommend for any party, always!!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>   
                    <UserText> Llana</UserText>
                </MainContainer >
                <MainContainer color="#f2f2f2">
                    <TestimonialHolder color="#2FBF97">
                        <TestimonialTextHolder>
                            <TestimonialText color="#fff">
                                These are way better than traditional paper
                                plates. They are much stronger, and they don`&#39;`t
                                have all the toxic chemicals that bleached paper
                                plates have. Will definitely buy again
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote
                                color="#f2f2f2"
                                src="./quotations.png"
                            />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Zoo crew</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Love these appetizer plates! Ideal for patio get
                                together with neighbors and are biodegradable too!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Adwillard</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Great for when you don`&#39;`t want to deal with the
                                mess, but want to stay classy AND sustainable.
                                Recommend for any party, always!!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>   
                    <UserText> Llana</UserText>
                </MainContainer >
                <MainContainer color="#f2f2f2">
                    <TestimonialHolder color="#2FBF97">
                        <TestimonialTextHolder>
                            <TestimonialText color="#fff">
                                These are way better than traditional paper
                                plates. They are much stronger, and they don`&#39;`t
                                have all the toxic chemicals that bleached paper
                                plates have. Will definitely buy again
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote
                                color="#f2f2f2"
                                src="./quotations.png"
                            />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Zoo crew</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Love these appetizer plates! Ideal for patio get
                                together with neighbors and are biodegradable too!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Adwillard</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Great for when you don`&#39;`t want to deal with the
                                mess, but want to stay classy AND sustainable.
                                Recommend for any party, always!!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>   
                    <UserText> Llana</UserText>
                </MainContainer >
                <MainContainer color="#f2f2f2">
                    <TestimonialHolder color="#2FBF97">
                        <TestimonialTextHolder>
                            <TestimonialText color="#fff">
                                These are way better than traditional paper
                                plates. They are much stronger, and they don`&#39;`t
                                have all the toxic chemicals that bleached paper
                                plates have. Will definitely buy again
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote
                                color="#f2f2f2"
                                src="./quotations.png"
                            />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Zoo crew</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Love these appetizer plates! Ideal for patio get
                                together with neighbors and are biodegradable too!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Adwillard</UserText>
                </MainContainer>
            </TestimonialContainer>
            
        </>
    )
}

export default CustomerTestimonial
