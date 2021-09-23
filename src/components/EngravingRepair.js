import React from 'react'
import Button from './Button'

export default function EngravingRepair() {
	return (
		<div className='engraving-container'>
			<h3>I do engraving and repairs on any jewelry!</h3>
			<p>
				Fill out the form below and I will be in touch with you about your
				service
			</p>
			<form
				className='engraving-form-container'
				action='https://formsubmit.co/jacobgfenner@yahoo.com'
				method='POST'
				autocomplete='off'
			>
				<input
					type='hidden'
					name='_next'
					value='http://artsmithadorn.surge.sh/thanks'
				/>
				<input type='hidden' name='_captcha' value='false' />
				<input type='text' name='_honey' style={{ display: 'none' }} />
				<div className='engraving-form-group'>
					<label>Name</label>
					<input type='text' name='name' aria-label='name' />
					<span className='auth-underline'></span>
				</div>
				<div className='engraving-form-group'>
					<label>Email</label>
					<input type='text' name='email' aria-label='email' requried />
					<span className='auth-underline'></span>
				</div>
				<div className='engraving-form-group'>
					<label>Service</label>
					<select name='service'>
						<option value='Engraving'>Engraving</option>
						<option value='repair'>Repair</option>
						<option value='resize'>Resize</option>
					</select>
					<span className='auth-underline b-0'></span>
				</div>
				<div className='engraving-form-group'>
					<label>Details</label>
					<textarea
						placeholder='Please include as much information as possible'
						name='message'
						aria-label='message'
						required
					/>
					<span className='auth-underline b-0'></span>
				</div>
				<div className='engraving-form-group'>
					<label>Please include a picture</label>
					<input id='file' type='file' name='attachment' />
					<span className='auth-underline'></span>
				</div>
				<div>
					<Button
						text={'Submit'}
						height={'36px'}
						maxWidth={'100%'}
						fontSize={'1rem'}
						border={'1px solid var(--mainYellow)'}
					/>
				</div>
			</form>
		</div>
	)
}
