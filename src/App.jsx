import Image_Gallery from './3D_IMAGE_GALLERY/Image_Gallery'
import './App.css'
import background3 from './Assets/background3.png'
function App() {

  return (
    <>
      <section>
        <img src={background3} alt="background" className="background" />
        <Image_Gallery />
      </section>
    </>
  )
}

export default App
