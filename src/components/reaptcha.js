/** @jsxImportSource @emotion/react */
import RegularReaptcha from 'reaptcha'

// Public site key 
function Reaptcha({isVerified, captchaRef, onVerify}) {
  return (
    <div css={{
      marginTop: '1rem'
    }}>
      { isVerified ?
        null
      : 
        <RegularReaptcha
          sitekey={process.env.REACT_APP_CAPTCHA_KEY}
          size='normal'
          ref={captchaRef}
          onVerify={onVerify}
        />          
      }
    </div>
  )
}

export {Reaptcha}