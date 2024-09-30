import '../css/main.css'
// import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="step first_step">
            <div className='number active'>1</div>

            <div className="step-heading_title">
              <p className="step-heading">Step 1</p>
              <p className='title'>Your Info</p>
            </div>
        </div>
        <div className="step second_step">
            <span className='number'>2</span>
            <div className="step-heading_title">
              <p className="step-heading">Step 2</p>
              <p className='title'>Select Plan</p>
            </div>
        </div>
        <div className="step third_step">
            <span className="number">3</span>
            <div className="step-heading_title">
              <p className="step-heading">Step 3</p>
              <p className='title'>Add Ons</p>
            </div>
        </div>
        <div className="step fourth_step">
            <span className="number">4</span>
            <div className="step-heading_title">
              <p className="step-heading">Step 4</p>
              <p className='title'>Summary</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
