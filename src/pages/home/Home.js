import MenuSlider from '../../component/menu-slider/MenuSlider'
import TopBar from '../../component/top-bar/TopBar'

const Home = () => {
    return (
        <div className="container-row">
            <MenuSlider />
            <div className="container-column">
                <TopBar></TopBar>
                <div>List of Blocks</div>
            </div>
        </div>
    )
}
export default Home;