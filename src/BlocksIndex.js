import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewSite, saveBlock } from './store/builderSlice'
import Blocks from './Blocks'
import testBlock from './testBlock'
export default function BlocksIndex () {
  const blocks = useSelector(state => state.builder.current.blocks)
  //it calls dinamicly render component
  const components = {
    text: testBlock
  };

    return (
      <>
      <div>
          {blocks ? blocks.map(b => {
            const Component = components[b.type];
            return <Component name={b.name}/>;
          }) : 'there is no any block in store'}
      </div>
      <Blocks />
      </>
    );
  }