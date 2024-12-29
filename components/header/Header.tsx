import React from 'react'
import HeaderLeft from './LeftSide';
import HeaderRight from './RightSide';

export default function Header() {
	return (
		<div className='mx-3 flex items-center justify-between py-4'>
<HeaderLeft/>
<HeaderRight/>
		</div>
	)
}
