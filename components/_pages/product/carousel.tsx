import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Carousel = (props) => {
    var currentpath
    const router=useRouter()
    useEffect(() => {
        currentpath = window.location.origin + window.location.pathname
        window.onpopstate=function(e){
               console.log(window.location)
               console.log(e)
               e.preventDefault()
               if(e.state){
                 router.push(currentpath)
               }
        }
    }, [])

    const returnfunc = (e, i) => {
        e.preventDefault()
        console.log(window.location)
        window.location.href = '#' + i
    }
    const images = props.images
    return (
        <>
            <div className="slider">
                <div className="slides">
                    {images.map((e, i) => (
                        <div key={i} id={'slide-' + i}>
                            <img src={images[i]} alt='product image'/>
                        </div>
                    ))}
                </div>
                {props.component === 'product' ? (
                    <>
                        {images.map((e, i) => (
                            <a
                                key={i}
                                onClick={(e) => returnfunc(e, 'slide-' + i)}
                            >
                                <img className="link" src={images[i]} alt='product image' />
                            </a>
                        ))}
                    </>
                ) : (
                    <>
                        <a
                            href="#slide-1"
                            onClick={(e) => returnfunc(e, 'slide-1')}
                        ></a>
                        <a
                            href="#slide-2"
                            onClick={(e) => returnfunc(e, 'slide-2')}
                        ></a>
                        <a
                            href="#slide-3"
                            onClick={(e) => returnfunc(e, 'slide-3')}
                        ></a>
                        <a
                            href="#slide-4"
                            onClick={(e) => returnfunc(e, 'slide-4')}
                        ></a>
                        <a
                            href="#slide-5"
                            onClick={(e) => returnfunc(e, 'slide-5')}
                        ></a>
                    </>
                )}
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
