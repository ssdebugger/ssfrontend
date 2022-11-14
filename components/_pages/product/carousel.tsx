import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Carousel = (props) => {
    const router = useRouter()
    useEffect(() => {
        var currentpath
        currentpath = window.location.origin + window.location.pathname
        window.onpopstate = function (e) {
            e.preventDefault()
            if (e.state) {
                router.push(currentpath)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const returnfunc = (e, i) => {
        e.preventDefault()
        window.location.href = '#' + i
    }
    return (
        <>
            <div className="slider">
                <div className="slides">
                        <div  id={'slide-'}>
                            {/* <Image src={images[i]} alt={props.alt} height="50%" width="50%" 
                            objectFit='cover' layout='responsive' /> */}
                           <img src={'/Main_WB.webp'} alt={props.alt}  />
                        </div>
                </div>
                    <>
                            <a
                                onClick={(e) => returnfunc(e, 'slide-')}
                            >
                                  {/* <Image src={images[i]} alt={props.alt} height="50%" width="100%" 
                            objectFit='cover' layout='responsive' className='link' />  */}
                                <img
                                    className="link"
                                    src={'/Main_WB.webp'}
                                    alt={'eco product'}
                                    loading="lazy"
                                />
                            </a> 
                    </>
            </div>

            <style jsx>{`
 

.slider {
  width: auto;
  text-align: center;
  overflow: hidden;
  overflow-anchor:none;
}

.slides {
  display: flex;
  overflow-x: auto;
  width:85%;
  height85%;
  margin-bottom:1rem;
  margin-left:10%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

 
}
  
.slides::-webkit-scrollbar {
  width: 10px;
  height: 5px;
  display:none;
}
.slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {

  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 500px;
  margin-right: 50px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}

img {
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.slider > a {
  cursor:pointer;
  display: inline-flex;
  width: ${props.component === 'product' ? '6rem' : '0.75rem'};
  height: ${props.component === 'product' ? '6rem' : '0.75rem'};
  background: black;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: ${props.component === 'product' ? '0%' : '50%'};
  padding:${props.component === 'product' ? '2rem 2rem' : '0% 0%'};
  opacity:${props.component === 'product' ? '0.6' : '1'};
  border:1px solid black;
  margin: 0 1rem 0.5rem 0;
  position: relative;

}
.slider > a :hover{
  opacity:1;
  border:4px solid orange;
}
@media only screen and (max-width:600px){
        .slider > a {
           display:none;
}

.slides::-webkit-scrollbar {
  display:block;
}
.slider:{
   width:320px !important;
}
.slides > div {
  height:300px;
}
}

           `}</style>
        </>
    )
}

export default Carousel
