/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as mq from 'utils/media-queries'
import {Container, Title, TitleImage, TitleGroup} from 'utils/lib'
import penguin from 'assets/title-penguin.png'
import flavorMangoMadness from 'assets/flavor-mango-madness.png'
import flavorChamango from 'assets/flavor-chamango.png'
import flavorCandyFactory from 'assets/flavor-candy-factory.png'
import flavorThaiSunset from 'assets/flavor-thai-sunset.png'
import flavorPrettyInPink from 'assets/flavor-pretty-in-pink.png'
import flavorChocolateCrunch from 'assets/flavor-chocolate-crunch.png'
import flavorTheClassic from 'assets/flavor-the-classic.png'
import flavorGreenTeaFusion from 'assets/flavor-green-tea-fusion.png'
import flavorHaloHalo from 'assets/flavor-halo-halo.png'
import flavorPeachMe from 'assets/flavor-peach-me.png'
import flavorCoconutCrave from 'assets/flavor-coconut-crave.png'
import flavorCoffee from 'assets/flavor-coffee.png'

function FlavorItem({src, alt, name, ...props}) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      css={{
        position: 'relative',
        [mq.small]: {
          flexGrow: '1',
          width: '50%',
        },
        [mq.medium]: {
          flexGrow: '1',
          width: '33%',
        },
        [mq.large]: {
          flexGrow: '1',
          width: '33%',
        }
      }}
    >
      {/* Hovered Fade In Container */}
      <div
        css={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#14BAD0',
          opacity: isHovered ? '1' : '0',
          maxWidth: '300px',
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          margin: 'auto',
          color: '#fff',
          cursor: 'pointer',
          transition: '0.3s all',
          boxShadow: '1px 2px 8px 2px rgba(0,0,0,0.15)',
        }}
        onMouseOver={e => {
          setIsHovered(true)
        }}
        onMouseOut={e => {
          setIsHovered(false)
        }}
      />
      
      {/* Hovered name and ingredients */}
      <div
        css={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: '4',
          maxWidth: '300px',
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          margin: 'auto',
          cursor: 'pointer',
          opacity: isHovered ? '1' : '0',
          color: '#fff',
        }}
        onMouseOver={e => {
          setIsHovered(true)
        }}
        onMouseOut={e => {
          setIsHovered(false)
        }}
      >
        {/* Name on hovered item */}
        <div
          css={{
            margin: '1.5rem',
            fontSize: '1.35rem',
            textTransform: 'uppercase',
            textAlign: 'left',
            fontFamily: 'Lato',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >{name}</div>
        <hr 
          css={{
            margin: '1rem auto',
            backgroundColor: '#fff',
            height: '2px',
            outline: 'none',
            border: 'none',
            width: '85%',
            display: 'flex',
          }}
        />
        <hr 
          css={{
            margin: '1rem auto',
            backgroundColor: '#fff',
            height: '2px',
            outline: 'none',
            border: 'none',
            width: '85%',
            display: 'flex',
          }}
        />
        {/* Ingredients List */}
        <div
          css={{
            margin: '1.5rem',
            textAlign: 'left',
            fontFamily: 'Lato, sans-serif',
            fontSize: '1.15rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            color: '#fff',
          }}
          {...props}      
        />
      </div>

      {/* Name on unhovered item */}
      <div
        css={{
          width: '100%',
          position: 'absolute',
          zIndex: '4',
          opacity: isHovered ? '0' : '1',
          fontFamily: 'Lato, sans-serif',
          color: '#fff',
          fontSize: '1.15rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          userSelect: 'none',
          [mq.extraSmall]: {
            top: '8.75rem',
            left: '1.5rem',
          }, 
          [mq.small]: {
            top: '8.75rem',
            left: '1.5rem',
          },
          [mq.medium]: {
            top: '8.75rem',
            left: '1.5rem',
          },
          [mq.large]: {
            top: '8.75rem',
            left: '1.5rem',
          }
        }}
        onMouseOver={e => {
          setIsHovered(true)
        }}
        onMouseOut={e => {
          setIsHovered(false)
        }}
      >{name}</div>
      <img
        src={src}
        alt={alt}
        css={{
          width: '100%',
          maxWidth: '300px',
          userSelect: 'none',
          zIndex: '3',
          position: 'relative',
        }}
        onMouseOver={e => {
          setIsHovered(true)
        }}
        onMouseOut={e => {
          setIsHovered(false)
        }}
      />
    </div>
  )
}

function AllergyWarning(props) {
  return (
    <div
      css={{
        position: 'absolute', 
        bottom: '0.5rem',
        fontSize: '0.9rem',
        left: '1.0rem',
        right: '0',
      }}
      {...props}
    />
  )
}

function SignatureFlavors() {
  return (
    <Container 
      css={{
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
      }}
    >
      <FlavorItem 
        src={flavorMangoMadness} 
        alt='mango-madness' 
        name='Mango Madness'
      >
        <div>Mango Fluff</div>
        <div>Fresh Sliced Mango</div>
        <div>Mango Jelly</div>
        <AllergyWarning>*Contains Dairy</AllergyWarning>
      </FlavorItem>
      <FlavorItem 
        src={flavorChamango} 
        alt='chamango' 
        name='Chamango'
      >
        <div>Mango Fluff</div>
        <div>Fresh Sliced Mango</div>
        <div>Mango Jelly</div>
        <div>Chamoy</div>
        <div>Tajin</div>
        <AllergyWarning>*Contains Dairy</AllergyWarning>
      </FlavorItem>
      <FlavorItem 
        src={flavorCandyFactory} 
        alt='candy-factory' 
        name='Candy Factory'
      >
        <div>Strawberry Fluff</div>
        <div>Gummy Bears</div>
        <div>Sprinkles</div>
      </FlavorItem>
      <FlavorItem 
        src={flavorPrettyInPink} 
        alt='pretty-in-pink' 
        name='Pretty In Pink'
      >
        <div>Strawberry Fluff</div>
        <div>Fresh Cut Strawberries</div>
        <div>Mochi</div>
      </FlavorItem>
      <FlavorItem 
        src={flavorTheClassic} 
        alt='the-classic' 
        name='The Classic'
      >
        <div>Original (Milk) Fluff</div>
        <div>Fresh Sliced Mangos</div>
        <div>Fresh Cut Strawberries</div>
        <AllergyWarning>*Contains Dairy</AllergyWarning>
      </FlavorItem>
      <FlavorItem 
        src={flavorChocolateCrunch} 
        alt='chocolate-crunch' 
        name='Chocolate Crunch'
      >
        <div>Chocolate Fluff</div>
        <div>Oreo® Cookie Chunks</div>
      </FlavorItem>
      <FlavorItem 
        src={flavorThaiSunset} 
        alt='thai-sunset' 
        name='Thai Sunset'
      >
        <div>Thai Tea Fluff</div>
        <div>Egg Pudding</div>
        <div>Lychee Jelly</div>
        <AllergyWarning>*Contains Dairy</AllergyWarning>
      </FlavorItem>
      <FlavorItem 
        src={flavorGreenTeaFusion} 
        alt='green-tea-fusion' 
        name='Green Tea Fusion'
      >
        <div>Green Tea Fluff</div>
        <div>Red Bean</div>
        <div>Mochi</div>
      </FlavorItem>
      <FlavorItem 
        src={flavorHaloHalo} 
        alt='halo-halo' 
        name='Halo Halo'
      >
        <div>Taro Fluff</div>
        <div>Egg Pudding</div>
        <div>Red Bean</div>
      </FlavorItem>
      <FlavorItem 
        src={flavorPeachMe} 
        alt='peach-me' 
        name='Peach Me'
      >
        <div>Peach Fluff</div>
        <div>Egg Pudding</div>
        <div>Lychee Jelly</div>
      </FlavorItem>
      <FlavorItem 
        src={flavorCoconutCrave} 
        alt='coconut-crave' 
        name='Coconut Crave'
      >
        <div>Coconut Fluff</div>
        <div>Fresh Cut Strawberries</div>
        <div>Lychee Jelly</div>
      </FlavorItem>
      <FlavorItem
        src={flavorCoffee}
        alt='coffee'
        name='Coffee'
      >
        <div>Coffee Fluff</div>
        <div>Graham Crackers</div>
        <AllergyWarning>*Contains Dairy</AllergyWarning>
      </FlavorItem>
    </Container>
  ) 
}

function MenuScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TitleGroup customcss={{ marginTop: '2rem'}}>
        <Title>SIGNATURE COMBINATIONS</Title>
        <TitleImage src={penguin} alt='penguin'/>
      </TitleGroup>

      <Container
        css={{
          fontSize: '1.2rem',
          marginBottom: '3rem',
          fontFamily: 'Lato, sans-serif',
          [mq.extraSmall]: {
            width: '200px',
            minWidth: '300px',
          },
          [mq.small]: {
            width: '500px',
          },
        }}
      >
        Craft your own delicious custom Fluff from our various flavors and toppings or choose from any of our Signature Combinations.
      </Container>

      <SignatureFlavors/>
    </div>
  )
}

export {MenuScreen}
