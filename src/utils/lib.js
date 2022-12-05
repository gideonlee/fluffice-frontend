/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as mq from 'utils/media-queries'
import {Link} from 'react-router-dom'

// Container is used to ensure min-width/max-width sizes are all consistent. 
function Container(props) {
  return (
    <div
      css={{
        minWidth: '320px',
        maxWidth: '1280px',
        margin: '0 auto',
        [mq.extraSmall]: {
          minWidth: '300px',
        }, 
        [mq.small]: {
          maxWidth: '720px',
        },
        [mq.medium]: {
          maxWidth: '900px',
        },
        [mq.large]: {
          maxWidth: '1280px',
        }
      }}
      {...props}
    />
  )
}

// Title used on routes
function Title(props) {
  return (
    <div
      css={{
        fontWeight: 'bold',
        fontFamily: 'Oswald, sans-serif',
        fontSize: '1.4rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        [mq.extraSmall]: {
          fontSize: '1.5rem',
        },
        [mq.small]: {
          fontSize: '1.75rem',
        },
        [mq.medium]: {
          fontSize: '2.75rem',
        },
        [mq.large]: {
          fontSize: '3.5rem',
        },
      }}
      {...props}
    />
  )
}

// Title Group Container
function TitleGroup(props) {
  return (
    <div
      css={{
        minWidth: '320px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      {...props}
    />
  )
}

// Title Image next to Title
function TitleImage({src, alt, ...props}) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img 
        src={src} 
        alt={alt}
        css={{
          [mq.extraSmall]: {
            marginLeft: '0.5rem',
            width: '60px',
            height: '60px'
          },
          [mq.small]: {
            marginLeft: '0.5rem',
            width: '60px',
            height: '60px'
          },
          [mq.medium]: {
            marginLeft: '1rem',
            width: '80px',
            height: '80px'
          },
          [mq.large]: {
            marginLeft: '1rem',
            width: '100px',
            height: '100px'
          },
        }}
        {...props}
      />
    </div>
  )
}

// Slogan Content Text
function SloganContent(props) {
  return (
    <div
      css={{
        fontFamily: 'Inter, Open Sans, sans-serif', 
        color: '#00B5BC',
        margin: '2rem auto',
        maxWidth: '800px',
        [mq.extraSmall]: {
          fontSize: '1.2rem',
          maxWidth: '400px',
        },
        [mq.small]: {
          fontSize: '2.0rem',
          maxWidth: '500px',
        },
        [mq.medium]: {
          fontSize: '2.0rem',
          maxWidth: '700px',
        },
        [mq.large]: {
          fontSize: '2.0rem',
          maxWidth: '800px',
        },
      }}
      {...props}
    />
  )
}

// Slogan Content Text
function CupSloganContent(props) {
  return (
    <div css={{ position: 'relative'}}>
      <div
        css={{
          fontFamily: 'Inter, Open Sans, sans-serif', 
          color: '#00B5BC',
          margin: '2rem auto',
          maxWidth: '800px',
          backgroundColor: '#00B5BC',
          width: '100%',
          height: '300px',
          background: '#00B5BC',
          transform: 'perspective(10px) rotateX(-1deg)',
          [mq.extraSmall]: {
            fontSize: '1.75rem',
            maxWidth: '400px',
          },
          [mq.small]: {
            fontSize: '2.0rem',
            maxWidth: '500px',
          },
          [mq.medium]: {
            fontSize: '2.0rem',
            maxWidth: '700px',
          },
          [mq.large]: {
            fontSize: '2.0rem',
            maxWidth: '800px',
          },
        }}
      />
      <div 
        css={{ 
          fontFamily: 'Inter, Open Sans, sans-serif', 
          width: '100%',
          margin: '0 auto',
          position: 'absolute',
          top: '6rem',
          left: '0',
          right: '0',
          color: '#fff',
          [mq.extraSmall]: {
            fontSize: '1.75rem',
            maxWidth: '400px',
          },
          [mq.small]: {
            fontSize: '2.0rem',
            maxWidth: '500px',
          },
          [mq.medium]: {
            fontSize: '2.0rem',
            maxWidth: '700px',
          },
          [mq.large]: {
            fontSize: '2.0rem',
            maxWidth: '800px',
          },
        }}
        {...props}
      />
    </div>
  )
}

// <hr> line divider
function Divider(props) {
  return (
    <hr
      css={{
        width: '100%',
        height: '2px',
        backgroundColor: '#000',
        display: 'flex',
        border: 'none',
        outline: 'none',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '1rem auto',
        [mq.extraSmall]: {
          maxWidth: '300px',
        },
        [mq.small]: {
          maxWidth: '500px',
        },
        [mq.medium]: {
          maxWidth: '800px',
        },
        [mq.large]: {
          maxWidth: '800px',
        },
      }}
      {...props}
    />
  )
}

function FormGroup(props) {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    />
  )
}

function InputLabel({htmlFor, ...props}) {
  return (
    <label
      htmlFor={htmlFor} 
      css={{
        textAlign: 'left',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        [mq.extraSmall]: {
          fontSize: '0.8rem',
        },
        [mq.small]: {
          fontSize: '0.9rem',
        },
        [mq.medium]: {
          fontSize: '1rem',
        },
        [mq.large]: {
          fontSize: '1rem',
        },
      }}
      {...props}
    />
  )
}

function Input({id, validate, ...props}) {
  return (
    <input 
      id={id}
      css={{
        borderRadius: '3px',
        border: '1px solid #f1f1f4',
        background: '#f1f2f7',
        padding: '8px 12px',
        marginBottom: '0.5rem',
      }}
      // {validate} prop takes React Hook Forms useForm's {...register("username")} 
      // e.g. <Input validate={{...register('username')}}/>
      {...validate}
      {...props} 
    />
  )
}

function InputError(props) {
  return (
    <div 
      role='alert'
      css={{
        textAlign: 'left',
        color: 'red',
        fontSize: '0.85rem'
      }}
      {...props} 
    />
  )
}

// Stylized button that routes on clic.
function RouteButton({to, ...props}) {
  return(
    <div 
      css={{
        width: '100%',
        margin: '0 auto',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link 
        to={to}
        css={{
          backgroundColor: '#14BAD0',
          border: '0 solid #E5E7EB',
          boxSizing: 'border-box',
          color: '#000000',
          fontFamily: 'Lato',
          fontSize: '1rem',
          fontWeight: '700',
          lineHeight: '1.75rem',
          padding: '.75rem 1.65rem',
          position: 'relative',
          textAlign: 'center',
          textDecoration: 'none #000000 solid',
          textDecorationThickness: 'auto',
          cursor: 'pointer',
          transform: 'rotate(-2deg)',
          userSelect: 'none',
          touchAction: 'manipulation',
          ':focus': {
            outline: 0,
          },
          ':after': {
            content: '""',
            position: 'absolute',
            border: '1px solid #000000',
            bottom: '5px',
            left: '5px',
            width: 'calc(100% - 1px)',
            height: 'calc(100% - 1px)',
            transition: 'all 0.2s',
          },
          ':hover': {
            backgroundColor: '#0ACFE9',
          },
          ':hover:after': {
            bottom: '2px',
            left: '2px',
            transition: 'all 0.2s',
          },
        }}
        {...props}
      />
    </div>
  )
}

// Stylized Button
function Button({customcss, submittedcss,...props}) {
  return (
    <div 
      css={{
        width: '100%',
        margin: '0 auto',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button 
        css={{
          backgroundColor: '#14BAD0',
          border: '0 solid #E5E7EB',
          boxSizing: 'border-box',
          color: '#000000',
          fontFamily: 'Lato',
          fontSize: '1rem',
          fontWeight: '700',
          lineHeight: '1.75rem',
          padding: '.75rem 1.65rem',
          position: 'relative',
          textAlign: 'center',
          textDecoration: 'none #000000 solid',
          textDecorationThickness: 'auto',
          cursor: 'pointer',
          transform: 'rotate(-2deg)',
          userSelect: 'none',
          touchAction: 'manipulation',
          marginTop: '2.5rem', 
          marginBottom: '2rem',
          ...customcss,
          ':focus': {
            outline: 0,
          },
          ':after': {
            content: '""',
            position: 'absolute',
            border: '1px solid #000000',
            bottom: '5px',
            left: '5px',
            width: 'calc(100% - 1px)',
            height: 'calc(100% - 1px)',
            transition: 'all 0.2s',
            ...submittedcss,
          },
          ':hover': {
            backgroundColor: '#0ACFE9',
          },
          ':hover:after': {
            bottom: '2px',
            left: '2px',
            transition: 'all 0.2s',
          },
        }}
      {...props}/>
    </div>
  )
}

// Square links used in the Find Us Component. When hovered, darkens the image and zooms in.
function SquareLink({alt, src, to, ...props}) {
  const [isHovered, setIsHovered] = React.useState(false) 
  return (
    <div
      css={{
        display: 'flex',
        margin: '1rem auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '2rem',
        marginRight: '2rem',
      }}
    >
      <div
        css={{
          position: 'relative',
          flex: 'display',
          backgroundColor: '#fff',
          overflow: 'hidden',
          transition: '0.5s all',
          borderRadius: '20px',
          border: '1px solid #bbb',
          [mq.extraSmall]: {
            height: '16rem',
            width: '16rem',
          },
          [mq.small]: {
            width: '16rem',
            height: '16rem',
          }, 
          [mq.medium]: {
            width: '15rem',
            height: '10rem',
          },
          [mq.large]: {
            height: '14rem',
            width: '21rem'
          },
        }}
        onMouseOver={e => {
          setIsHovered(true)
        }}
        onMouseOut={e => {
          setIsHovered(false)
        }}
      >
        <Link to={to}>
          {/* Darkens the hovered link */}
          <div
            css={{
              position: 'absolute',
              width: '100%',
              backgroundColor: '#000',
              opacity: isHovered ? 0.075 : 0.15,
              transition: 'all 0.3s',
              zIndex: '3',
            }}      
          />
          <img 
            alt={alt} 
            src={src}
            css={{
              position: 'absolute',
              display: 'block',
              maxWidth: '100%',
              transition: 'all 0.6s',
              transform: isHovered ? `scale(1.05)` : `scale(1.0)`,
              [mq.medium]: {
                top: '-2rem',
              },
              [mq.large]: {
                top: '-5rem',
              },
            }}
          />
        </Link>
      </div>
      
      <Link 
        to={to}
        css={{
          marginTop: '2rem',
          marginBottom: '2rem',
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#fff',
          fontWeight: 'bold',
          transition: '0.3s all',
          fontSize: '1.5rem',
          fontFamily: 'Lato, sans-serif',
          letterSpacing: '0.5px',
          position: 'absolute',
          zIndex: '4',
        }}
        onMouseOver={e => {
          setIsHovered(true)
        }}
        onMouseOut={e => {
          setIsHovered(false)
        }}
        {...props}
      />
    </div>
  )
}

// Icons are used for social media links.
function Icon({src, alt, href, width, height, customcss}) {
  const [showHoverImage, setShowHoverImage] = React.useState(false)
  
  return(
    <div
      css={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '0.5rem 0.5rem',
        width: width,
        height: height,
      }}
    >
      <a 
        href={href}
        target='_blank' 
        rel='noreferrer'
      >
        <img 
          alt={alt} 
          src={src}
          onMouseOver={e => {
            setShowHoverImage(true)
          }}
          onMouseOut={e => {
            setShowHoverImage(false)
          }}
          css={{
            transition: '0.3s ease-in-out',
            borderRadius:'50%',
            border: showHoverImage ? '2px solid #fff' : '2px solid transparent',
            width: width,
            height: height,
            ...customcss,
          }}
        />
      </a>
    </div>
  )
}

// Picture links are used in Gallery Routes Component
function PictureLink({alt, src, to, bgPosition, children}) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Link
      to={to}
      css={{
        position: 'relative',
        minHeight: '600px',
        minWidth: '320px',
        maxHeight: '800px',
        overflow: 'hidden',
        borderRadius: '20px',
        border: '1px solid #bbb',
        [mq.extraSmall]: {
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '1rem',
          marginBottom: '3rem',
          minHeight: '200px',
          minWidth: '300px',
        },
        [mq.small]: {
          minWidth: '320px',
          minHeight: '300px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '1rem',
          marginBottom: '3rem',
          maxWidth: '600px',
        },
        [mq.medium]: {
          flex: '1',
          minWidth: '400px',
          minHeight: '300px',
          margin: '2rem',
        },
        [mq.large]: {
          flex: '1',
          minWidth: '400px',
          minHeight: '300px',
          margin: '2rem',
        },
      }}
      onMouseOver={(e) => {
        setIsHovered(true)
      }}
      onMouseOut={(e) => {
        setIsHovered(false)        
      }}
    > 
      {/* Centers Link Text */}
      <div
        css={{
          position: 'absolute',
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '4',
        }}
      >
        <div 
          css={{
            maxWidth: "50%",
            color: '#fff',
            fontFamily: 'Lato, Open Sans, sans-serif',
            fontSize: '1.75rem',
            letterSpacing: '0.5px',
            fontWeight: '700',
          }}
        >{children}</div>
      </div>
      {/* Darkens the hovered link */}
      <div
        css={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: '#000',
          opacity: isHovered ? 0.075 : 0.15,
          transition: 'all 0.3s',
          zIndex: '3',
        }}      
      />
      {/* Background Image */}
      <div
        css={{
          position: 'absolute',
          zIndex: '2',
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: `${bgPosition}`,
          transform: isHovered? 'scale(1.05)' : 'scale(1.0)',
          transition: '0.6s all',
          height: '100%',
          width: '100%',
        }}
      />
    </Link>
  )
}

// Image Full Width
function Image({src, alt, ...props}) {
  return (
      <img
        src={src} 
        alt={alt}
        css={{
          width: '100%',
        }}
        {...props}
      />
  )
}

function SplitColumn(props) {
  return (
    <div
      css={{
        flex: '1',
        margin: '2rem',
      }}
      {...props}
    />
  )
}

function SplitColumnTitle(props) {
  return (
    <div
      css={{
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
      }}
      {...props}
    />
  )
}

function SplitColumnBody(props) {
  return (
    <div
      css={{
        textAlign: 'left',
        fontFamily: 'Lato, sans-serif',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginBottom: '1rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        [mq.extraSmall]: {
          flexDirection: 'column',
          maxWidth: '300px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2rem',
        },
        [mq.small]: {
          flexDirection: 'column',
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2rem',
        },
        [mq.medium]: {
          marginLeft: '1rem',
          marginRight: '1rem',
          marginBottom: '2rem',
        },
        [mq.large]: {
          marginLeft: '3rem',
          marginRight: '3rem',
          marginBottom: '2rem',
        },
      }}
    {...props}/>
  )
}

export {Container, Title, TitleGroup, TitleImage, SloganContent, CupSloganContent, Divider, Input, InputError, InputLabel, FormGroup, Button, Icon, RouteButton, Image, PictureLink, SquareLink, SplitColumn, SplitColumnBody, SplitColumnTitle}