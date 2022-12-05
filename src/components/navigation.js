/** @jsxImportSource @emotion/react */
import logo from 'assets/logo.png'
import {Link, useMatch} from 'react-router-dom'
import * as mq from 'utils/media-queries'

function NavLink({scrollPosition, ...props}) {
  const match = useMatch(props.to)
  
  return (
    <Link 
      css={[{
        textDecoration: "none",
        fontFamily: 'Lato, sans-serif',
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginLeft: '1rem',
        marginRight: '1rem',
        alignSelf: 'flex-end',
        userSelect: 'none',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        [mq.extraSmall]: {
          fontSize: '0.85rem',
          marginLeft: '0.5rem',
          marginRight: '0.5rem',
        },
        [mq.small]: {
          fontSize: '1rem',
        },
        [mq.medium]: {
          fontSize: '1.4rem',
        },
        [mq.large]: {
          fontSize: '1.4rem',
        },
      },
      window.location.pathname === '/' && scrollPosition < 50
        ? {
            color: '#fff'
          }
        : {
            color: '#000'
          },
      match?.pathname !== '/' && match 
        ? {
            color: '#14BAD0',
          } 
        : null
      ]}
    {...props} />
  )
}

function Nav({scrollPosition}) {
  const match = useMatch(window.location.pathname)

  return (
    <div
      css={[
        match?.pathname === '/' && match 
        ? {
            height: '0px',
          } 
        : {
            [mq.extraSmall]: {
              height: '150px'
            },
            [mq.small]: {
              height: '150px'
            },
            [mq.medium]: {
              height: '100px'
            },
            [mq.large]: {
              height: '100px'
            },
          }
      ]}
    >
      <div 
        css={[{
          position: 'fixed',
          zIndex: '9',
          boxShadow: '1px 1px 6px 1px rgba(0,0,0,0.15)',
          width: '100%',
          minWidth: '320px',
          [mq.medium]: {
            paddingBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          [mq.large]: {
            paddingBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        match?.pathname !== '/' && match 
          ? {
              backgroundColor: '#fff',
              boxShadow: '1px 1px 6px 1px rgba(0,0,0,0.15)',
            } 
          : {
              backgroundColor: scrollPosition > 50 
                ? '#fff' 
                : 'transparent',
              boxShadow: scrollPosition > 50 
                ? '1px 1px 6px 1px rgba(0,0,0,0.15)' 
                : 'none',
            }
        ]}
      >
        <NavLink 
          to='/'
          css={{
            marginLeft: '2rem',
          }}
        >
          <img 
            alt='logo' 
            src={logo}
            css={{
              [mq.extraSmall]: {
                width: '100px',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
              },
              [mq.small]: {
                width: '100px',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
              },
              [mq.medium]: {
                width: '165px',
              },
              [mq.large]: {
                width: '165px',
              },
            }}
          />
        </NavLink>

        <div
          css={{
            [mq.medium]: {
              display: 'flex',
              alignSelf: 'flex-end',
            },
            [mq.large]: {
              display: 'flex',
              alignSelf: 'flex-end',
            },
          }}
        >
          <NavLink 
            to='/menu' 
            match={match} 
            scrollPosition={scrollPosition}
            css={{ lineHeight: '3.0rem' }}
          >Menu</NavLink>
          <NavLink 
            to='/locations' 
            match={match} 
            scrollPosition={scrollPosition}
            css={{ lineHeight: '3.0rem' }}
          >Locations</NavLink>
          <NavLink 
            to='/catering' 
            match={match} 
            scrollPosition={scrollPosition}
            css={{ lineHeight: '3.0rem' }}
          >Catering</NavLink>
          <NavLink 
            to='/fundraising' 
            match={match} 
            scrollPosition={scrollPosition}
            css={{ lineHeight: '3.0rem' }}
          >Fundraising</NavLink>
        </div>
      </div>
    </div>
  )
}

export {NavLink, Nav}
