import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewSite, saveBlock } from './store/builderSlice'
import Blocks from './Blocks'
import Text from './Text'
import Img from './Img'
import Header from './Header'

export default function BuilderIndex () {
  const blocks = useSelector(state => state.builder.current.blocks)
  //it calls dinamicly render component
  const components = {
    text: Text,
    img: Img,
    header: Header
  };

    return (
      <>
      <div>
          {blocks ? blocks.map(b => {
            const Component = components[b.type];
            return <Component name={b.name} id={b.id}/>;
          }) : 'there is no any block in store'}
      </div>
      <Blocks />
      </>
    );
  }