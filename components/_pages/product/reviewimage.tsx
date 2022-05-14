import { UserImageHolder } from './index.style'

const Reviewimage = () => {
    const imagegallery = [
        './static/images/img1.jpg',
        './static/images/img2.jpg',
        './static/images/img3.jpg',
        './static/images/img4.jpg',
        './static/images/img5.jpg',
    ]
    const enlarge = (i) => {
        const img = document.getElementById(i)

        img.style.transform = 'scale(1.5)'
        // Animation effect
        img.style.transition = 'transform 0.25s ease'
    }
    return (
        <UserImageHolder>
            {imagegallery.map((e, i) => (
                <img
                    id={String(i)}
                    key={i}
                    onClick={() => enlarge(i)}
                    style={{
                        cursor: 'pointer',
                        height: '5rem',
                        width: '5rem',
                        margin: '1rem 1rem 0 1rem',
                    }}
                    src={imagegallery[i]}
                    alt='eco friendly products'
                />
            ))}
        </UserImageHolder>
    )
}
export default Reviewimage

function str(i: number): string {
    throw new Error('Function not implemented.')
}
