/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as mq from 'utils/media-queries'
import {Icon} from 'utils/lib'
import facebookLogo from 'assets/logo-white-facebook.png'
import yelpLogo from 'assets/logo-white-yelp.png'
import instagramLogo from 'assets/logo-white-instagram.png'
import twitterLogo from 'assets/logo-white-twitter.png'
import footerNinja from 'assets/footer-ninja.png'
import footerPenguin from 'assets/footer-penguin.png'

function Address({title, address, city, state, zip, phone, email}) {
  return(
    <div 
      className='address-container'
      css={{
        fontFamily: 'Lato, sans-serif',
        marginBottom: '3rem',
        zIndex: '2',
        fontSize: '1.0rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        minWidth: '320px',
        color: '#fff',
      }} 
    >
      <div
        css={{
          marginBottom: '1rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          fontFamily: 'Open Sans, sans-serif',
          [mq.extraSmall]: {
            fontSize: '0.9rem'
          },
        }}
      >{title}</div>  
      <div
        css={{
          marginBottom: '0.5rem',
          fontSize: '1rem',
          [mq.extraSmall]: {
            fontSize: '0.9rem'
          },
        }}  
      >{address}</div>
      <div
        css={{
          marginBottom: '0.5rem',
          fontSize: '1rem',
          [mq.extraSmall]: {
            fontSize: '0.9rem'
          },
        }}  
      >{city}, {state} {zip}</div>
      <div
        css={{
          marginBottom: '0.5rem',
          fontSize: '1rem',
          [mq.extraSmall]: {
            fontSize: '0.9rem'
          },
        }}  
      >
        {phone} | <a css={{
          textDecoration: 'none',
          color: '#fff',
          fontSize: '1rem',
          [mq.extraSmall]: {
            fontSize: '0.9rem'
          },
          ':hover': {
            textDecoration: 'underline',
          }
        }} href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}

function SocialMedia({cssOverride}) {
  return(
    <div>
      <div
        css={{
          fontFamily: 'Titan One, sans-serif',
          color: '#fff',
          fontSize: '1.5rem',
          letterSpacing: '3px',
          marginBottom: '1rem',
          paddingTop: '2rem',
          [mq.extraSmall]: {
            fontSize: '1.2rem'
          },
          ...cssOverride,
        }}
      >
        FOLLOW US
      </div>
      <div
        css= {{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        <Icon 
          href='https://www.instagram.com/fluffice_la' 
          src={instagramLogo} 
          alt='instagram-logo'
          width='50px'
          height='50px'
        />
        <Icon 
          href='https://www.yelp.com/biz/fluff-ice-truck-rosemead' 
          src={yelpLogo} 
          alt='yelp-logo'
          width='50px'
          height='50px'
        />
        <Icon 
          href='https://www.facebook.com/fluffice/' 
          src={facebookLogo} 
          alt='facebook-logo'
          width='50px'
          height='50px'
        />
        <Icon 
          href='https://twitter.com/fluffice' 
          src={twitterLogo} 
          alt='twitter-logo'
          width='50px'
          height='50px'
        />
      </div>
    </div>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return(
    <div 
      css={{
        position: 'relative',
        backgroundColor: '#14BAD0',
        width: '100%',
        height: '100%',
        minWidth: '320px',
        boxShadow: '1px -2px 7px 1px rgba(0,0,0,0.15)',
      }}
    >
      <img 
        src={footerNinja} 
        alt='footer-ninja'
        css={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          zIndex: '1',
          [mq.extraSmall]: {
            display: 'none'
          },
          [mq.small]: {
            display: 'none',
          },
          [mq.medium]: {
            maxHeight: '200px',
          },
          [mq.large]: {
            maxHeight: '250px',
          },
        }}
      />

      <img 
        src={footerPenguin}
        alt='footer-penguin'
        css={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          zIndex: '1',
          [mq.extraSmall]: {
            display: 'none'
          },
          [mq.small]: {
            display: 'none',
          },
          [mq.medium]: {
            maxHeight: '200px',
          },
          [mq.large]: {
            maxHeight: '250px',
          },
        }}
      />
      <SocialMedia/>
      <div 
        css={{
          display: 'flex',
          justifyContent: 'center',
          [mq.extraSmall]: {
            flexFlow: 'column',
          },
          [mq.small]: {
            flexFlow: 'column',
          }
        }}
      >
        <Address
          title='Fluff Ice Truck'
          address='Based out of'
          city='Rosemead'
          state='CA'
          zip='91770'
          phone='626-400-0594'
          email='nick@fluffice.com'
        />
        <Address
          title='Fluff Ice Las Vegas'
          address='325 North Nellis Boulevard'
          city='Las Vegas'
          state='NV'
          zip='89110'
          phone='702-202-0810'
          email='info@flufficelv.com'
        />
      </div>
      <div 
        css={{
          color: '#fff', 
          fontSize: '1.1rem', 
          paddingBottom: '1rem',
          [mq.extraSmall]: {
            fontSize: '0.9rem'
          },
        }}
      >© Fluff Ice {year}</div>
    </div>
  )
}

export {Footer}