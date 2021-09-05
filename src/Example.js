import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewSite, saveBlockState } from './store/builderSlice'
import EasyEdit from 'react-easy-edit';

import DeleteButton from "./pages/Builder/components/DeleteButton"

export default function Example (props) {
  const siteName = useSelector(state => state.builder.current.siteName)
  const dispatch = useDispatch()
  const id = props.id
  const toStore = (value) => {dispatch(saveBlockState(id, value))}
  const save = (value) => {dispatch(createNewSite(value))}
  return (
    <>
    <EasyEdit
      type="text"
      onBlur={toStore}
      // attributes={{ name: "awesome-input", id: 1}}
    />
    <DeleteButton id={props.id} />
    <textarea onBlur={save}></textarea>
    </>
  );
}
