/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as mq from 'utils/media-queries'
import {TitleGroup, Title, TitleImage, FormGroup, Input, InputLabel, InputError, Button} from 'utils/lib'
import bunny from 'assets/title-bunny.png'
import {requestCatering} from 'utils/api-send-request'
import {Controller, useForm} from 'react-hook-form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {Reaptcha} from 'components/reaptcha'

function CateringForm({captchaRef, onSubmit, submitButton}) {
  const {register, control, handleSubmit, formState: {isSubmitSuccessful, errors}} = useForm()

  const [captchaToken, setCaptchaToken] = React.useState(null)

  // Captcha onVerify
  const onVerify = () => {
    captchaRef.current.getResponse().then(res => {
      setCaptchaToken(res)
    })
  }

  const [requestSent, setRequestSent] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [buttonText, setButtonText] = React.useState('SEND A REQUEST')

  return (
    <div 
      css={{
        position: 'relative',
        minWidth: '320px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* handleSubmit validates before invoking onSubmit */}
      <form 
        onSubmit={
            handleSubmit(form => {
              setButtonText('Sending...')
              onSubmit({form, captchaToken}).then(res => {
                setRequestSent(true)
                if (res.success) {
                  setButtonText('SENT!')
                } else {
                  setButtonText('Whoops!')
                }
                setMessage(res.message)
              })
            })
        }
        css={{
          width: '100%',
          marginBottom: '2rem',
          [mq.extraSmall]: {
            maxWidth: '300px',
          },
          [mq.small]: {
            maxWidth: '400px',
          },
          [mq.medium]: {
            maxWidth: '500px',
          },
          [mq.large]: {
            maxWidth: '500px',
          },
        }}
      >
        {/* First and Last Name */}
        <FormGroup
          css={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <div css={{flex: 1}}>
            <InputLabel 
              htmlFor='first-name'
              css={{
                display: 'block',
              }}
            >First Name</InputLabel>
            <Input 
              id='first-name'
              css={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
              }}
              aria-invalid={errors.firstName ? "true" : "false"}
              validate={{...register('firstName', {
                required: "First name is required.",
                minLength: {
                  value: 2,
                  message: 'First name must be at least 2 letters.'
                },
                maxLength: {
                  value: 30,
                  message: 'First name is too long.'
                },
                pattern: {
                  value: /^[A-Za-z'-]+$/,
                  message: 'Name cannot contain numbers or symbols.'
                }
              })}}
            />
            {
              errors.firstName && <InputError>{errors.firstName?.message}</InputError> 
            }
          </div>
          <div css={{flex: 1, marginLeft: '1rem'}}>
            <InputLabel 
              htmlFor='last-name'
              css={{
                display: 'block',
              }}
            >Last Name</InputLabel>
            <Input 
              id='last-name'
              css={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
              }}
              aria-invalid={errors.lastName ? "true" : "false"}
              validate={{...register('lastName', {
                required: "Last name is required.",
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 letters.'
                },
                maxLength: {
                  value: 30,
                  message: 'Last name is too long.'
                },
                pattern: {
                  value: /^[A-Za-z'-]+$/,
                  message: 'Name cannot contain numbers or symbols.'
                }
              })}}
            />
            {
              errors.lastName && <InputError>{errors.lastName?.message}</InputError>
            }
          </div>
        </FormGroup>

        {/* Email and Phone */}
        <FormGroup
          css={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <div css={{flex: 1}}>
            <InputLabel 
              htmlFor='email'
              css={{
                display: 'block',
              }}
            >Email</InputLabel>
            <Input 
              id='email'
              css={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
              }}
              aria-invalid={errors.email ? "true" : "false"}
              validate={{...register('email', {
                required: 'Email Address is required.',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}}
            />
            {
              errors.email && <InputError>{errors.email?.message}</InputError> 
            }
          </div>
          <div css={{flex: 1, marginLeft: '1rem'}}>
            <InputLabel 
              htmlFor='phone'
              css={{
                display: 'block',
              }}
            >Phone</InputLabel>
            <Input 
              id='phone'
              css={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
              }}
              aria-invalid={errors.phone ? "true" : "false"}
              validate={{...register('phone', {
                required: 'Phone number is required.',
                pattern: {
                  value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  message: 'Valid number is required e.g. 555-555-5555.'
                }
              })}}
            />
            {
              errors.phone && <InputError>{errors.phone?.message}</InputError>
            }
          </div>
        </FormGroup>

        {/* Date and Hours Required */}
        <FormGroup
          css={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <div css={{ flex: 1 }}>
            <InputLabel 
              htmlFor='date'
              css={{ display: 'block' }}
            >Date</InputLabel>
            <Controller
              control={control}
              name='date'  
              rules={{ required: true }}
              render={({field}) => {
                return (
                  <DatePicker
                    id='date'
                    aria-invalid={errors.date ? "true" : "false"}
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    minDate={new Date()}
                    css={{
                      boxSizing: 'border-box',
                      borderRadius: '3px',
                      border: '1px solid #f1f1f4',
                      backgroundColor: '#f1f2f7',
                      padding: '8px 12px',
                      display: 'block',
                      width: '100%',
                      marginBottom: '0.5rem'
                    }}
                  />
                )
              }}
            />
            {
              errors.date?.type === 'required' && <InputError>Date is required.</InputError>
            }
          </div>

          <div css={{ flex: 1, marginLeft: '1rem' }}>
            <InputLabel 
              htmlFor='hours'
              css={{ display: 'block' }}
            >Service Time/Hours</InputLabel>
            <Input
              id='hours'
              css={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
              }}
              aria-invalid={errors.hours ? "true" : "false"}
              validate={{...register('hours', {
                required: "If you're unsure, an estimate is okay.",
                pattern: {
                  value: /^[\w\d\s,.-]+$/,
                  message: 'Please remove special characters/symbols.'
                }
              })}}
            />
            {
              errors.hours && <InputError>{errors.hours?.message}</InputError>
            }
          </div>
        </FormGroup>

        {/* Servings */}
        <FormGroup>
          <InputLabel htmlFor='servings'>Estimated number of servings (100 servings minimum)</InputLabel>
          <Input 
            id='servings'
            aria-invalid={errors.servings ? "true" : "false"}
            validate={{...register('servings', {
              required: 'Please provide an estimate.',
              pattern: {
                value: /^[\w ~.]+$/,
                message: 'Please remove characters/symbols.'
              }
            })}}
          />
          {
            errors.servings && <InputError>{errors.servings?.message}</InputError>
          }
        </FormGroup>
        
        {/* City and Zip */}
        <FormGroup
          css={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <div css={{flex: 1}}>
            <InputLabel 
              htmlFor='city'
              css={{
                display: 'block',
              }}
            >City</InputLabel>
            <Input 
              id='city'
              css={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
              }}
              aria-invalid={errors.city ? "true" : "false"}
              validate={{...register('city', {
                required: 'Please provide a city.',
                pattern: {
                  value: /^[\w ,.]+$/,
                  message: 'Please remove characters/symbols.'
                }
              })}}
            />
            {
              errors.city && <InputError>{errors.city?.message}</InputError>
            }
          </div>
          <div css={{flex: 1, marginLeft: '1rem'}}>
            <InputLabel 
              htmlFor='zip'
              css={{
                display: 'block',
              }}
            >Zip</InputLabel>
            <Input 
              id='zip'
              css={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
              }}
              aria-invalid={errors.zip ? "true" : "false"}
              validate={{...register('zip', {
                required: 'Please enter a zip code.',
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: 'Please enter a valid 5 digit zip code.'
                }
              })}}
            />
            {
              errors.zip && <InputError>{errors.zip?.message}</InputError>
            }
          </div>
        </FormGroup>

        
        {/* ReCAPTCHA */}
        <Reaptcha
          isVerified={requestSent}
          captchaRef={captchaRef}
          onVerify={onVerify}
        />

        {/* Submit Button */}
        <div>
          {React.cloneElement(
            submitButton,
            {
              type: 'submit', 
              disabled: captchaToken === null || requestSent,
              customcss: isSubmitSuccessful ? {width: '185px', backgroundColor: "#0ACFE9"} : {width: '185px'},
              submittedcss: isSubmitSuccessful ? {bottom: '2px', left: '2px'} : null
            },
            buttonText
          )}
        </div>
        
        {/* Request success message */}
        <div 
          css={{
            margin: '1rem',
            height: '1rem',
          }}
        >
          <div
            css={{
              display: isSubmitSuccessful ? 'block' : 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              fontFamily: 'Lato, sans-serif',   
            }}
          >
            {message !== '' ? message : null}
          </div>
        </div>
      </form>
    </div>
  )
}

function CateringScreen() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const captchaRef = React.useRef()

  return (
    <div>
      <TitleGroup>
        <Title>CATER AN EVENT</Title>
        <TitleImage src={bunny} alt='bunny'/>
      </TitleGroup>
      <div css={{
          marginBottom: '3.5rem', 
          fontFamily: 'Lato, sans-serif',
          fontSize: '1.4rem',
          minWidth: '320px',
          [mq.extraSmall]: {
            fontSize: '1rem',
          },
          [mq.small]: {
            fontSize: '1.1rem',
          },
        }}
      >
        Throughout Southern California and Las Vegas
      </div>
      <CateringForm 
        captchaRef={captchaRef}
        onSubmit={requestCatering} 
        submitButton={<Button/>} />
    </div>
  )
}

export {CateringScreen}