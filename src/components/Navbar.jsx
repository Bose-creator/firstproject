import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className='header'>

    
    <div className='logo'>
    <div className='onone'></div>
    </div>
    <div className='text'> XYZ
    </div>

    
    <div className='overline'>
    <a href="">Overview</a>
    <a href="">Feature</a>
    <a href="">About</a>
     <a href="">Pricing</a>
    </div>

    
        <div className='third'>
            <a href="#"> <img src="../assets/Vector (1).png" alt="" />Language</a>
        </div>
        
            <button className='btnone'>Sign up</button>
        
    </div>



    {/* <div >
      <div className='second'>
        <div className='recta'>
        <h2 className='word'>Develop your skills without diligence</h2>
        
        </div>
        <div className='wordtwo' >
        
        <h6>A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</h6>
        </div>

        
        <button className='btntwo' >Get Started</button>
        <button className='btntwo' >Discount</button>

      </div>
        
        
    </div> */}

    <div className="second">
      <div className="left">
      <div className='recta'>
        <h2 className='word'>Develop your skills without diligence</h2>
        <p>A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</p>
        <button className='btntwo'>Get started</button>
        <button className='btntwo'>Discount</button>
        </div>
      </div>
      <div className="right">
      <img src="../assets/undraw_fashion_blogging_re_fhi5 1 (1).png"  className='checker' alt="" />
      </div>
      
    </div>
    </>
  )
}

export default Navbar

