import { Button } from '@/components/ui/button'
import Couch from '@/data/images/couch.png'
import { Link } from 'react-router'
const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className=" flex flex-col lg:flex-row lg:justify-between items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="">Modern Interior Design Studio</h1>
          <p className="">Funiture is an essential compoenent of any living space, providing functionality, comfort,and aesthetic appeal.</p>
          <div className="">
            <Button>
              <Link to={'#'}>Shop Now</Link>
            </Button>
            <Button>
              <Link to={'#'}>Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <img src={Couch} alt="" />
      </div>
    </div>
  )
}

export default Home