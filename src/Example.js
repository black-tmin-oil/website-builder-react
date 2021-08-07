import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveBlockState, createNewSite } from './store/builderSlice'

export default function Example() {
	//let s = useSelector(state => state.builder.current)
	const dispatch = useDispatch()

	return (
		<div>
		  <button onClick={() => {
		  	dispatch(createNewSite('newSite'))
		  }}
		  >
		  create site
		  </button>  
		</div>

	)
}