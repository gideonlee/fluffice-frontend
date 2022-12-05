/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as mq from 'utils/media-queries'
import {Title, TitleGroup, TitleImage, Divider, Icon} from 'utils/lib'
import locationLasVegas from 'assets/location-las-vegas.jpg'
import locationTruck from 'assets/location-los-angeles-truck.jpg' 
import locationLasVegasTruck from 'assets/location-las-vegas-truck.jpg'
import facebookLogo from 'assets/logo-black-facebook.png'
import yelpLogo from 'assets/logo-black-yelp.png'
import instagramLogo from 'assets/logo-black-instagram.png'
import tiktokLogo from 'assets/logo-black-tiktok.png'
import bunnyEating from 'assets/title-bunny-eating.png'
import bunnyHappy from 'assets/title-happy-bunny.png'
import whaleHappy from 'assets/title-happy-whale.png'

function LocationImage({src, alt}) {
  return  (
    <div 
      css={{
        marginTop: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        minWidth: '320px',
      }}
    >
      <img 
        alt={alt} 
        src={src}
        css={{
          width: '100%',
          outline: '1px solid #000',
          [mq.extraSmall]: {
            maxWidth: '300px',
            height: '270px',
          },
          [mq.small]: {
            maxWidth: '500px',
            height: '335px',
          },
          [mq.medium]: {
            maxWidth: '800px',
            height: '540px',
          },
          [mq.large]: {
            maxWidth: '800px',
            height: '540px',
          },
        }}
      />
    </div>
  )
}

function AddressContainer({...props}) {
  return (
    <div
      css={{
        marginTop: '2rem',
        marginBottom: '2rem',
        minWidth: '320px',
      }}
      {...props}
    />
  )
}

function AddressTitle({customcss, children}) {
  return (
    <div
      css={{
        fontWeight: 'bold',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '1.1rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        ...customcss,
      }}
    >{children}</div> 
  ) 
}

function AddressLine({children}) {
  return (
    <div
      css={{
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
      }}
    >{children}</div>
  )
}

function Locations() {
  return (
    <div
      css={{
        marginBottom: '3rem',
      }}
    >
      {/* Los Angeles Truck */}
      <TitleGroup>
        <Title id='location-truck'>TRUCK LOS ANGELES</Title>
        <TitleImage src={whaleHappy} alt='happy-whale'/>
      </TitleGroup>

      <LocationImage
        src={locationTruck}
        alt='location-los-angeles-truck'
      />

      <AddressContainer>
        <AddressTitle>Address:</AddressTitle>
        <AddressLine>Based out of Southern California</AddressLine>
        
        <AddressTitle customcss={{marginTop: '2rem'}}>Availability:</AddressTitle>
        <AddressLine>Contact us to see if we can</AddressLine>
        <AddressLine>cater at your next big event!</AddressLine>
        <AddressLine>626-400-0594 | <a css={{
          textDecoration: 'none',
          color: '#000',
          ':hover': {
            textDecoration: 'underline',
          }
        }} href='mailto:nick@fluffice.com'>nick@fluffice.com</a></AddressLine>

        <div css={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}>
          <Icon 
            alt='instagram-logo' src={instagramLogo} 
            href='https://www.instagram.com/fluffice_la'
            width='40px'
            height='40px'
          />
          <Icon 
            alt='yelp-logo' 
            src={yelpLogo} 
            href='https://www.yelp.com/biz/fluff-ice-truck-rosemead'
            width='40px'
            height='40px'
          />
          <Icon 
            alt='facebook-logo' 
            src={facebookLogo} 
            href='https://www.facebook.com/fluffice/'
            width='40px'
            height='40px'
          />
        </div>
      </AddressContainer>

      <Divider/>

      {/* Las Vegas */}
      <TitleGroup>
        <Title id='location-las-vegas'>LAS VEGAS</Title>
        <TitleImage src={bunnyHappy} alt='happy-bunny'/>
      </TitleGroup>

      <LocationImage 
        src={locationLasVegas} 
        alt='location-las-vegas'
      />
      
      <AddressContainer>
        <AddressTitle>Address:</AddressTitle>     
        <AddressLine>325 North Nellis Boulevard</AddressLine>
        <AddressLine>Las Vegas, NV 89110</AddressLine>
        <AddressLine>
          702-202-0810 | <a css={{
            textDecoration: 'none',
            color: '#000',
            ':hover': {
              textDecoration: 'underline',
            }
          }} href='mailto:info@flufficelv.com'>info@flufficelv.com</a>
        </AddressLine>
        <AddressTitle customcss={{marginTop: '2rem'}}>Hours:</AddressTitle>
        <AddressLine>Sun-Thurs | 12:00 PM - 6:00 AM</AddressLine>
        <AddressLine>Fri-Sat | 12:00 PM - 7:00 PM</AddressLine>

        <div css={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}>
          <Icon 
            alt='instagram-logo' src={instagramLogo} 
            href='https://www.instagram.com/fluffice.lv'
            width='40px'
            height='40px'
          />
          <Icon 
            alt='yelp-logo' 
            src={yelpLogo} 
            href='https://www.yelp.com/biz/fluff-ice-las-vegas-3'
            width='40px'
            height='40px'
          />
          <Icon
            alt='tiktok-logo'
            src={tiktokLogo}
            href='https://www.tiktok.com/@flufficelv?lang=en'
            width='40px'
            height='40px'
          />
          <Icon 
            alt='facebook-logo' 
            src={facebookLogo} 
            href='https://www.facebook.com/FluffIceLV/'
            width='40px'
            height='40px'
          />
        </div>
      </AddressContainer>

      <Divider/>

      {/* Las Vegas Truck */}
      <TitleGroup>
        <Title id='location-las-vegas-truck'>TRUCK LAS VEGAS</Title>
        <TitleImage src={bunnyEating} alt='bunny-eating'/>
      </TitleGroup>

      <LocationImage src={locationLasVegasTruck} alt='location-las-vegas-truck'/>
      
      <AddressContainer>
        <AddressTitle>Address:</AddressTitle>
        <AddressLine>Based out of Las Vegas</AddressLine>
        
        <AddressTitle customcss={{marginTop: '2rem'}}>Availability:</AddressTitle>
        <AddressLine>Contact us to see if we can</AddressLine>
        <AddressLine>cater at your next big event!</AddressLine>
        <AddressLine>702-202-0810 | <a css={{
          textDecoration: 'none',
          color: '#000',
          ':hover': {
            textDecoration: 'underline',
          }
        }} href='mailto:info@flufficelv.com'>info@flufficelv.com</a></AddressLine>

        <div css={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}>
          <Icon 
            alt='instagram-logo' src={instagramLogo} 
            href='https://www.instagram.com/fluffice.lv'
            width='40px'
            height='40px'
          />
          <Icon 
            alt='yelp-logo' 
            src={yelpLogo} 
            href='https://www.yelp.com/biz/fluff-ice-las-vegas-3'
            width='40px'
            height='40px'
          />
          <Icon
            alt='tiktok-logo'
            src={tiktokLogo}
            href='https://www.tiktok.com/@flufficelv?lang=en'
            width='40px'
            height='40px'
          />
          <Icon 
            alt='facebook-logo' 
            src={facebookLogo} 
            href='https://www.facebook.com/FluffIceLV/'
            width='40px'
            height='40px'
          />
        </div>
      </AddressContainer>
    </div>
  )
}

function LocationsScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Locations/>
    </div>
  )
}

export {LocationsScreen}
