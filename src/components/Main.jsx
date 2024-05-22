import img1 from '../assets/image/team-05.png'
import img2 from '../assets/image/team-06.png'
import img3 from '../assets/image/team-07.jpg'

export default function Main () {
    return (
        <div className="main-section">
            <h2>our service</h2>
            <div className="container">
            <div className="div1">
                <img src={img1} alt="" />
                <h4>service 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolor!</p>
            </div>
            <div className="div1">
                <img src={img2} alt="" />
                <h4>service 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolor!</p>
            </div>
            <div className="div1">
                <img src={img3} alt="" />
                <h4>service 3</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dolor!</p>
            </div>
            </div>
        </div>
    )
}