import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'
import Copyright from './Copyright'

export default function Contact(props) {
	return (
		<div className='contact' id='contact'>
			<div className='contact-grid'>
				<div className='contact-grid-left'>
					<h5>Information</h5>
					<div></div>
					<Link to='/privacy_policy' className='link'>
						<p>Privacy Policy</p>
					</Link>
					<Link to='/refund_policy' className='link'>
						<p>Refund Policy</p>
					</Link>
					<Link to='/sizing_chart' className='link'>
						<p>Sizing Chart</p>
					</Link>
				</div>
				<div className='contact-grid-middle'>
					<h5>Contact Me</h5>
					<div></div>
					<p>Aberdeen, SD 57401</p>
					<p>(605) 380-3352</p>
				</div>
				<form
					className='contact-grid-right'
					action='https://formsubmit.co/jacobgfenner@yahoo.com'
					method='POST'
					autocomplete='off'
				>
					<div></div>
					<div className='contact-grid-form'>
						<input
							type='hidden'
							name='_next'
							value='http://artsmithadorn.surge.sh/thanks'
						/>
						<input type='hidden' name='_captcha' value='false' />
						<input type='text' name='_honey' style={{ display: 'none' }} />
						<div className='contact-form-box'>
							<input
								className='contact-form-input'
								type='text'
								placeholder='Name'
								name='name'
								aria-label='name'
							/>
							<span className='underline'></span>
						</div>
						<div className='contact-form-box'>
							<input
								className='contact-form-input'
								type='text'
								placeholder='Email Address'
								name='email'
								aria-label='email address'
								required
							/>
							<span className='underline'></span>
						</div>
						<div className='contact-form-box'>
							<input
								className='contact-form-input'
								type='text'
								placeholder='Subject'
								name='subject'
								aria-label='subject'
							/>
							<span className='underline'></span>
						</div>
						<div className='contact-form-box' id='message'>
							<textarea
								id='message'
								placeholder='Message'
								name='message'
								aria-label='message'
								required
							/>
							<span className='underline'></span>
						</div>
						<div className='button'>
							<Button
								text={'Send'}
								maxWidth={'100px'}
								height={'50px'}
								fontSize={'1rem'}
								border={'1px solid var(--mainYellow)'}
							/>
						</div>
						{/* <div className="button">
                            <span className="bg"></span>
                            <span className="text">Send</span>
                        </div> */}
					</div>
				</form>
			</div>
			<div className='newsletter'>
				<h5>Sign up for newsletter</h5>
				<form
					action='https://formsubmit.co/jacobgfenner@yahoo.com'
					method='POST'
				>
					<input type='hidden' name='_next' value='' />
					<input type='hidden' name='_captcha' value='false' />
					<input type='text' name='_honey' style={{ display: 'none' }} />
					<input
						type='hidden'
						name='subject'
						value="I'd like to sign up for your newsletter!"
					/>
					<input
						id='newsletter'
						type='email'
						placeholder='email@example.com'
						name='email'
						aria-label='email@example.com'
						autoCorrect='off'
						required
					/>
					<button type='submit'>Subscribe</button>
				</form>
			</div>
			<Copyright />
		</div>
	)
}
