/** @jsxImportSource @emotion/react */
import * as React from 'react'
import {keyframes} from "@emotion/react";
import * as mq from 'utils/media-queries'
import {Container, SquareLink, PictureLink, Image, RouteButton, Divider, SplitColumn, SplitColumnTitle, SplitColumnBody, SloganContent} from 'utils/lib'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo from 'assets/dashboard-logo11.png'
import findTruck from 'assets/find-truck.jpg'
import findLasVegas from 'assets/find-las-vegas.jpg'
import findCatering from 'assets/find-catering.jpg'
import routeMenu from 'assets/route-menu.jpg'
import routeCatering from 'assets/route-catering.jpg'
import fundraising from 'assets/fundraising.jpg'
import dashboardVideo from 'assets/dashboard-video.mp4'
import locationLasVegas from 'assets/dashboard-las-vegas.jpg'
import carousel0 from 'assets/c0.jpg'
import carousel1 from 'assets/c1.jpg'
import carousel2 from 'assets/c2.jpg'
import carousel3 from 'assets/c3.jpg'
import carousel4 from 'assets/c4.jpg'
import carousel5 from 'assets/c5.jpg'
import menu1 from 'assets/menu1.jpg'
import menu2 from 'assets/menu2.jpg'
import photo1 from 'assets/p1.jpg'
import photo2 from 'assets/p2.jpg'
import photo3 from 'assets/p3.jpg'
import photo4 from 'assets/p4.jpg'
import photo5 from 'assets/p5.jpg'
import photo6 from 'assets/p6.jpg'
import photo7 from 'assets/p7.jpg'
import photo8 from 'assets/p8.jpg'
import photo9 from 'assets/p9.jpg'
import photo10 from 'assets/p10.jpg'
import photo11 from 'assets/p11.jpg'
import photo12 from 'assets/p12.jpg'

// Main Component has full screen video and greeting.
function Main() {
  const videoRef = React.useRef()

  // Set video start time position 
  React.useEffect(() => {
    videoRef.current.currentTime = 5
  }, [])

  const fadeIn = keyframes({
    "0%": {opacity: '0.0'},
    "40%": {opacity: '0.35'},
    "70%": {opacity: '0.75'},
    "100%": {opacity: '1.0'}
  }) 

  const fadeOut = keyframes({
    '0%': {opacity: '1'},
    '35%': {opacity: '0.7'},
    '70%': {opacity: '0.35'},
    '100%': {opacity: '0.0'},
  })

  const greeting = `Glad to see you!  We look forward to serving you!`

  return (
    <Container 
      css={{
        position: 'relative',
        minHeight: '500px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        [mq.extraSmall]: {
          height: '50vh',
          maxHeight: '800px',
          maxWidth: '100vw',
        },
        [mq.small]: {
          height: '80vh',
          maxHeight: '800px',
          maxWidth: '100vw',
        },
        [mq.medium]: {
          height: '100vh',
          maxWidth: '100vw',
        },
        [mq.large]: {
          height: '100vh',
          maxWidth: '100vw',
        },
      }}
    >
      {/* Video Text Container, fades in message word by word and fades entire message away. */}
      <div
        css={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          color: '#fff',
          fontSize: '3rem',
          fontFamily: 'Alexandria',
          fontWeight: 'bold',
          letterSpacing: '1px',
          zIndex: '2',
          cursor: 'pointer',
          userSelect: 'none',
          animation: `${fadeOut} 0.3s ease-in-out 6.5s forwards`,
          height: '90%',
          [mq.extraSmall]: {
            maxWidth: '320px',
            fontSize: '1.2rem',
          },
          [mq.small]: {
            maxHeight: '800px',
            maxWidth: '600px',
            fontSize: '1.75rem',
          },
          [mq.medium]: {
            maxWidth: '700px',
            fontSize: '2.5rem',
          },
          [mq.large]: {
            maxWidth: '800px',
            fontSize: '3rem',
          },
        }}
        onClick={() => {
          videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
        }}
      >
        {/* Greeting fades in word by word. */}
        <div css={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          userSelect: 'none',
          marginTop: '7rem',
          [mq.medium]: {
            height: '100px',
          },
          [mq.large]: {
            height: '200px',
          },
        }}>
          {
            greeting.split(' ').map((word, i) => (
              <div
                key={`greeting-${i}`}
                css={{
                  opacity: '0',
                  marginLeft: '0.25rem',
                  marginRight: '0.25rem',
                  animation: `${fadeIn} ${0.15+i*0.06}s ease-in-out ${0.15*i}s forwards`
                }}
              >
                {word}
              </div>
            ))
          }
        </div>
      </div>
      
      {/* Logo container, fades in once words fade out */}
      <div
        css={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          opacity: '0',
          userSelect: 'none',
          animation: `${fadeIn} 0.3s ease-in-out 7.5s forwards`,
          zIndex: '2',
          height: '100%',
          [mq.extraSmall]: {
            minWidth: '320px',
            maxWidth: '400px',
          },
          [mq.small]: {
            maxWidth: '600px',
          },
          [mq.medium]: {
            maxWidth: '700px',
          },
          [mq.large]: {
            maxWidth: '800px',
          },
        }}
        onClick={() => {
          videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
        }}
      >
        <img 
          src={logo} 
          alt='logo-center'
          css={{
            [mq.extraSmall]: {
              width: '50%',
            },
            [mq.small]: {
              width: '40%',
            },
            [mq.medium]: {
              width: '50%',
            },
            [mq.large]: {
              width: '45%',
            },
          }}
        />
      </div>

      {/* Video Container */}
      <div
        css={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}  
      >
        <video
          ref={videoRef}
          css={{
            width: '100%',
            overflow: 'hidden',
            [mq.extraSmall]: {
              transform: 'translateY(-25%)',
            },
            [mq.small]: {
              transform: 'translateY(-25%)',
            },
            [mq.medium]: {
              transform: 'translateY(-30%)',
            },
            [mq.large]: {
              transform: 'translateY(-40%)',
            },
          }}
          autoPlay 
          muted
          loop
          onClick={() => {
            videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()
          }}
        >
          <source 
            css={{
              width: '100%',
              height: '100%',
            }}
            src={dashboardVideo}  
            type='video/mp4'
          />
          Video not supported.
        </video>
      </div>
    </Container>
  )
}

// Signature Flavors Slideshow
function SignatureFlavors() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }
  
  return (
    <Container 
      css={{ 
        borderTop: '1px solid #000',
        maxWidth: '100vw',
        [mq.extraSmall]: {
          maxWidth: '100vw',
          margin: '1rem auto',
        }, 
        [mq.small]: {
          maxWidth: '100vw',
          margin: '2rem auto',
        },
        [mq.medium]: {
          maxWidth: '100vw',
          margin: '2rem auto',
        },
        [mq.large]: {
          maxWidth: '100vw',
          margin: '2rem auto',
        }
      }}
    >
      <Carousel 
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition='all 1.0s'
        transitionDuration={1000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
        draggable={false}
        swipeable={true}
        css={{ 
          [mq.extraSmall]: {
            marginLeft: '0rem', 
            marginRight: '0rem' 
          },
          [mq.small]: {
            marginLeft: '0rem', 
            marginRight: '0rem' 
          },
          [mq.medium]: {
            marginLeft: '0rem', 
            marginRight: '0rem' 
          },
          [mq.large]: {
            marginLeft: '2rem', 
            marginRight: '2rem' 
          }, 
        }}
      >
        <Image src={carousel0} alt='taro-fluff'/>
        <Image src={carousel1} alt='strawberry-fluff'/>
        <Image src={carousel2} alt='four-fluffs'/>
        <Image src={carousel3} alt='making-taro-fluff'/>
        <Image src={carousel4} alt='mango-chocolate-fluffs'/>
        <Image src={carousel5} alt='green-tea-and-mango-chocolate-fluffs'/>
        <Image src={menu1} alt='menu1'/>
        <Image src={menu2} alt='menu2'/>
      </Carousel>
    </Container>
  )
}

// Find Us Component will route user to different locations/information
function FindUs() {
  return (
    <Container>
      <div
        css={{
          margin: '0rem auto',
          fontWeight: 'bold',
          marginTop: '5rem',
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'Lato, sans-serif',
          [mq.extraSmall]: {
            fontSize: '1.1rem',
            minWidth: '320px',
          },
          [mq.small]: {
            fontSize: '1.1rem',
          },
          [mq.medium]: {
            fontSize: '1.15rem',
          },
          [mq.large]: {
            fontSize: '1.25rem',
          },
        }}
      >FLUFF ICE LOCATIONS</div>
      <div
        css={{
          fontWeight: 'bold',
          marginBottom: '4rem',
          fontFamily: 'Open Sans, sans-serif',
          color:'#eee',
          [mq.extraSmall]: {
            fontSize: '2.5rem',
            minWidth: '320px',
          },
          [mq.small]: {
            fontSize: '3rem',
          },
          [mq.medium]: {
            fontSize: '4rem',
          },
          [mq.large]: {
            fontSize: '4rem',
          },
        }}
      >DISCOVER US</div>
      <div 
        css={{
          display: 'flex', 
          marginBottom: '4rem',
          minWidth: '320px',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          flex: '1',
          [mq.extraSmall]: {
            flexDirection: 'column',
          },
          [mq.small]: {
            flexDirection: 'column',
            maxWidth: '720px',
          },
          [mq.medium]: {
            maxWidth: '900px',
          },
          [mq.large]: {
            maxWidth: '1280px',
          },
        }}
      >
        <SquareLink 
          alt='food-truck' 
          src={findTruck} 
          to='/locations'
        >FLUFF ICE TRUCK</SquareLink>  
        <SquareLink 
          alt='las-vegas-restaurant' 
          src={findLasVegas} 
          to='/locations'
        >LAS VEGAS STORE</SquareLink>
        <SquareLink 
          alt='catering'
          src={findCatering} 
          to='/catering'
        >CATERING</SquareLink>
      </div>
    </Container>
  )
}

// Fluff Ice Slogan 
function Slogan() {
  return (
    <Container
      css={{
        [mq.extraSmall]: {
          marginTop: '4rem',
          marginBottom: '4rem',
          width: '200px',
          minWidth: '300px',
        },
        [mq.small]: {
          marginTop: '6rem',
          marginBottom: '6rem',
        },
        [mq.medium]: {
          marginTop: '8rem',
          marginBottom: '8rem',
        },
        [mq.large]: {
          marginTop: '8rem',
          marginBottom: '8rem',
        },
      }}
    >
      <Divider css={{ backgroundColor: '#00B5BC' }}/>
      <SloganContent>
        <div css={{ color: '#00B5BC'}}>
          It's Not Ice Cream, It's Not Yogurt, It's Creamy and Full of Flavor, It's Light and Fluffy, 
        </div>
        <div css={{ color: '#00B5BC'}}>It's Simply Fluff Ice</div>
      </SloganContent>
      <Divider css={{ backgroundColor: '#00B5BC' }}/>
    </Container>
  )
}

// Gallery Routes Component will have two pictures links that will lead users to /catering or /menu
function PictureRoutes() {
  return (
    <Container 
      css={{
        display: 'flex',
        justifyContent: 'center',
        [mq.extraSmall]: {
          flexDirection: 'column',
        },
        [mq.small]: {
          flexDirection: 'column',
        },
        [mq.medium]: {
          flexDirection: 'row',
          marginTop: '4rem',
          marginBottom: '4rem',
        },
        [mq.large]: {
          flexDirection: 'row',
          marginTop: '4rem',
          marginBottom: '4rem',
        },
      }}
    >
      <PictureLink 
        alt='route-to-catering' 
        src={routeCatering} 
        to='/catering' 
        bgPosition='bottom'
      >CATER AN EVENT</PictureLink>
      <PictureLink 
        alt='route-to-menu' 
        src={routeMenu} 
        to='/menu' 
        bgPosition='center'
      >EXPLORE THE MENU</PictureLink>
    </Container>
  )
}

// Catering Information and Form
function CateringAndFundraising() {
  return (
    <Container
      css={{
        display: 'flex',
        justifyContent: 'center',
        [mq.extraSmall]: {
          flexDirection: 'column',
          marginTop: '2rem',
        },
        [mq.small]: {
          flexDirection: 'column',
          marginTop: '2rem',
        },
        [mq.medium]: {
          flexDirection: 'row',
          marginTop: '7rem',
        },
        [mq.large]: {
          flexDirection: 'row',
          marginTop: '7rem',
        },
      }}
    >
      {/* Catering Fundraising Content */}
      <SplitColumn
        css={{
          marginLeft: '1rem',
          marginRight: '1rem',
        }}
      >
        <SplitColumnTitle>CATER AN EVENT</SplitColumnTitle>
        <SplitColumnBody>Whether you are hosting a corporate event, birthday party, wedding, bar mitzvah, or any other type of gathering, we would love the opportunity to serve your our signature Fluff and topping combinations.</SplitColumnBody>
        <SplitColumnBody>Our clients include: Toyota, The Office (TV Show), Activision-Blizzard, Nickelodeon, Sony Studios, Warner Brothers, Parks and Recreation (TV Show), Adobe, TBS and more!</SplitColumnBody>

        <SplitColumnTitle css={{marginTop: '2rem'}}>FUNDRAISING</SplitColumnTitle>
        <SplitColumnBody>Since we started Fluff Ice in 2011, we’ve had a strong emphasis on giving back to our community helping out our student groups. To date, we’ve hosted numerous fundraisers at our stores as well as with our Fluff Ice Truck.</SplitColumnBody>
        <SplitColumnBody>No matter how big or small, we’re committed to bringing happiness to the world, one cup of Fluff at a time.</SplitColumnBody>
        <RouteButton to='/catering'>INQUIRE NOW</RouteButton>
      </SplitColumn>

      {/* Fundraising Picture */}
      <SplitColumn>
        <Image
          alt='fundraising-catering'
          src={fundraising}
          css={{
            borderRadius: '28px',
          }}
        />
      </SplitColumn>
    </Container>
  )
}

function LasVegasLocation() {
  return (
    <Container
      id={'las-vegas'}
      css={{
        display: 'flex',
        marginTop: '4rem',
        [mq.extraSmall]: {
          flexDirection: 'column',
        },
        [mq.small]: {
          flexDirection: 'column',
        },
        [mq.medium]: {
          flexDirection: 'row',
        },
        [mq.large]: {
          flexDirection: 'row',
        },
      }}
    >
      {/* Las Vegas Picture */}
      <SplitColumn>
        <Image
          alt='location-las-vegas'
          src={locationLasVegas}
          css={{ borderRadius: '28px'}}
        />
      </SplitColumn>

      {/* Las Vegas Content */}
      <SplitColumn
        css={{
          marginLeft: '1rem',
          marginRight: '1rem',
        }}
      >
        <SplitColumnTitle>Fluff Ice Las Vegas!</SplitColumnTitle>
        <SplitColumnBody>
          Fluff Ice is proud to announce our Las Vegas location! Come visit us at 325 N Nellis Blvd Ste. 110, Las Vegas, NV 89110.
        </SplitColumnBody>
        <SplitColumnBody>
          Celebrate your next big event with us!
        </SplitColumnBody>
        <SplitColumnBody css={{ textAlign: 'center' }}>
          <div css={{ margin: '2rem auto' }}>(702) 202-0810</div>
          <div css={{ margin: '0.5rem auto' }}>
            Sun-Thurs | 12:00 PM - 6:00 AM
          </div>
          <div css={{ margin: '0.5rem auto' }}>
            Fri-Sat | 12:00 PM - 7:00 PM
          </div>
        </SplitColumnBody>
      </SplitColumn>
    </Container>
  )
}

// Photo Gallery 
function PhotoGallery() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }
  
  return (
    <Container
      css={{ margin: '5rem auto' }}
    >
      <Carousel 
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition='all 1s'
        transitionDuration={1000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        css={{ 
          borderRadius: '28px', 
          marginLeft: '2rem', 
          marginRight: '2rem' 
        }}
      >
        <Image src={photo1} alt='photo-gallery-1'/>
        <Image src={photo2} alt='photo-gallery-2'/>
        <Image src={photo3} alt='photo-gallery-3'/>
        <Image src={photo4} alt='photo-gallery-4'/>
        <Image src={photo5} alt='photo-gallery-5'/>
        <Image src={photo6} alt='photo-gallery-6'/>
        <Image src={photo7} alt='photo-gallery-7'/>
        <Image src={photo8} alt='photo-gallery-8'/>
        <Image src={photo9} alt='photo-gallery-9'/>
        <Image src={photo10} alt='photo-gallery-10'/>
        <Image src={photo11} alt='photo-gallery-11'/>
        <Image src={photo12} alt='photo-gallery-12'/>
      </Carousel>
    </Container>
  )
}

// Dashboard Screen
function DashboardScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Main/>
      <SignatureFlavors/>
      <FindUs/>
      <Slogan/>
      <PictureRoutes/>
      <CateringAndFundraising/>
      <LasVegasLocation/>
      <PhotoGallery/>
    </div>
  )
}

export {DashboardScreen}