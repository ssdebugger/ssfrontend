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
import { useEffect } from 'react'

const CustomerTestimonial = () => {
    var count = 0

    const ScrollFunction = () => {
        let container = window.document.getElementById('testcontainer')
        let width = window.innerWidth
        if (width + count * width <= container.scrollWidth) {
            count += 1
            container.scrollBy(width, 0)
        } else {
            container.scrollBy(-(width + count * width), 0)
            count = 0
        }
    }
    useEffect(() => {
        const Intrevalid = setInterval(() => {
            ScrollFunction()
        }, 30000)
        return () => clearInterval(Intrevalid)
    }, [])
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <SubHeading>What our amazon customers say ..</SubHeading>
            </div>
            <TestimonialContainer id="testcontainer">
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Bought these for my daughter`&#39;`s wedding for
                                serving popcorn, and we LOVE them! Beautiful!
                                Each one is different and such a
                                nice tone!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText>S.Burger</UserText>
                </MainContainer>
                <MainContainer color="#f2f2f2">
                    <TestimonialHolder color="#2FBF97">
                        <TestimonialTextHolder>
                            <TestimonialText color="#fff">
                                Highly recommend if you are shopping for
                                disposable tableware. These were exactly what we
                                were looking for to host a bridal shower. These
                                were sturdy and more elegant than typical paper
                                plates. Many guests commented on the plates!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote
                                color="#f2f2f2"
                                src="./quotations.png"
                            />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText>Bryce Sliva</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Due to COVID-19, we needed small bowls for
                                individual servings during a recent outdoor get
                                together. They were sturdy, pretty, and
                                compostible. My guests loved them, even before
                                knowing they were compostible.
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText>A.C.Kramer</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                These small trays were perfect for holding a few
                                Easter cupcakes and some candy for neighbors.
                                They were sturdy enough to hold their shape when
                                I covered them and light enough to carry quite a
                                few at one time. I will definitely purchase them
                                again for other gifts of good.
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText>Laurie</UserText>
                </MainContainer>
                <MainContainer color="#f2f2f2">
                    <TestimonialHolder color="#2FBF97">
                        <TestimonialTextHolder>
                            <TestimonialText color="#fff">
                                Purchased these for my at home wedding. Natural
                                wood textured decorations and these serving
                                plates were perfect. Unique in style, and very
                                functional. I would and will buy them again for
                                another event in the future.
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote
                                color="#f2f2f2"
                                src="./quotations.png"
                            />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText>Aurelia Anderson</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                These are exactly what they look like in the
                                pictures. Well made and durable while being
                                biodegradable. I don`&#39;`t have any other
                                brands to compare it to, but I would buy it
                                again.
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText>kendrick J Jimenez</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                Great for when you don`&#39;`t want to deal with
                                the mess, but want to stay classy AND
                                sustainable. Recommend for any party, always!!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Llana</UserText>
                </MainContainer>
                <MainContainer color="#f2f2f2">
                    <TestimonialHolder color="#2FBF97">
                        <TestimonialTextHolder>
                            <TestimonialText color="#fff">
                                Love these appetizer plates! Ideal for patio get
                                together with neighbors and are biodegradable
                                too!
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote
                                color="#f2f2f2"
                                src="./quotations.png"
                            />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText>Adwillard</UserText>
                </MainContainer>
                <MainContainer>
                    <TestimonialHolder color="#f2f2f2">
                        <TestimonialTextHolder>
                            <TestimonialText>
                                I like them. Sturdy, not fragile. More study
                                than plastic spoons.
                            </TestimonialText>
                        </TestimonialTextHolder>
                        <TestimonialQuoteHolder>
                            <TestimonialQuote src="./quotations.png" />
                        </TestimonialQuoteHolder>
                    </TestimonialHolder>
                    <UserText> Kristin Elaine Stewart</UserText>
                </MainContainer>
            </TestimonialContainer>
        </>
    )
}

export default CustomerTestimonial
