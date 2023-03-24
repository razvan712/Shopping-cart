import './About.css'

export function About() {
  return (
    <>
    <div className='container' style={{}} >
     <h1 className='mx-auto' style={{textAlign:'center', color: '#6C63FF'}}>About Us
     </h1>
     <div className='mx-auto my-4' style={{background: '#6C63FF', height: '2px', width:'40vw'}}>
     </div>
       <div className="row">
         <div className="content-container col-md-5" >
         
           <h4 style={{fontFamily: 'var(--font-base)' , fontWeight: "bold", color: '#6C63FF'}}>
               Welcome to RazStore, your online-shop for all your  needs!
            </h4>

<p style={{fontFamily: 'var(--font-base)', fontWeight: "bold"}}>At RazStore, we are passionate about E-commerce and believe that everyone should have access to high-quality products at affordable prices. Our mission is to provide our customers with an exceptional shopping experience that is convenient, enjoyable, and stress-free.

We offer a wide range of products, from electronics to food, sourced from the best manufacturers and suppliers from around the world. Our product selection is constantly evolving, and we are always on the lookout for the latest and greatest products to add to our collection.</p>

<p style={{fontFamily: 'var(--font-base)', fontWeight: "bold"}}>At RazStore, we pride ourselves on providing excellent customer service. Our knowledgeable and friendly staff are always available to answer any questions you may have and help you find the perfect product to meet your needs. We also offer a hassle-free return policy, so if you're not completely satisfied with your purchase, you can return it for a full refund or exchange.

We understand the importance of convenience, which is why we offer multiple payment options and fast shipping. You can shop with confidence knowing that your order will be delivered quickly and securely.

Thank you for choosing RazStore. We look forward to serving you and helping you find the perfect products to meet your needs.
           </p>
         </div>
          <div className="col-md-2"></div>
        <div className="content-container col-md-5">
          <div className=' about-img'>
          <img  src="../../imgs/ecommerce.jpg" alt="about" className=" img-fluid m-2" style={{borderRadius: '20px'}}  />
          </div>
          <div className=' about-img'>
          <img  src="../../imgs/laptop.jpg" alt="about" className=" img-fluid m-2" style={{borderRadius: '20px'}}  />
          </div>
         
       </div>
    </div>
   </div>
    </>
  )
}