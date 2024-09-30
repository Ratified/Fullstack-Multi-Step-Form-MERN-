import ThankyouLogo from '../assets/images/icon-thank-you.svg';
import '../css/main.css'
import '../css/finish.css'

const Finish = () => {
  return (
    <div className="finish">
        <img src={ThankyouLogo} alt="Thank you Logo " />
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default Finish
