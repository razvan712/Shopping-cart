import { BsYoutube, BsInstagram , BsTwitter} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export function Contact() {
  return (
    <>
  <div className='container w-75' style={{}} >
        <h1 className='mx-auto' style={{textAlign:'center', color: '#6C63FF'}}>Contact Us
         </h1>
     <div className='mx-auto my-4' style={{background: '#6C63FF', height: '2px', width:'40vw'}}>
     </div>
       <div className="row mt-5">
         <div className="content-container col-md-5" >
          <div>
          <h4 style={{fontFamily: 'var(--font-base)' , fontWeight: "bold"}}>
             Contact Details
            </h4>
         </div>
          <div className="my-5">
          <p style={{fontFamily: 'var(--font-base)'}}>Email:
            <a href="mailto:Razstore@contact.ro">
            Razstore@contact.ro
            </a>
            </p>
            <p style={{fontFamily: 'var(--font-base)'}}>Phone: 0745 555 555</p>


          </div>
          <div>
          <h4 style={{fontFamily: 'var(--font-base)' , fontWeight: "bold"}}>
            Follow Us
            </h4>
         
            <div className='icons-container w-50 d-flex justify-content-between my-3'>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BsInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <BsYoutube />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <BsTwitter />
            </a>
            </div>

            <p> @2022 Privacy Policy </p>
            </div>
          
         </div>

         
           
          <div className="col-md-2"></div>
        <div className="content-container col-md-5">
          <h4 style={{fontFamily: 'var(--font-base)' , fontWeight: "bold"}}>
             Contact Form
            </h4>

            <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
              
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={3} defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

       </div>
    </div>
</div>

    </>
  )
}