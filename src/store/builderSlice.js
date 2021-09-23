import { createSlice } from '@reduxjs/toolkit'

export const builderSlice = createSlice({
  name: 'builder',
  initialState: {
    current: {},
    history: []
  },
  reducers: {
	
	saveBlock: (state, action) => {
		const Block = state.current.blocks
		Block.push(action.payload)
	},
    saveBlockState: (state, action) => {
	  const currentBlock = state.current.blocks.find(e => e.id === action.payload.id)
	  currentBlock.attributes = Object.assign({}, action.payload.attributes);
    },
    deleteBlock: (state, action) => {
		state.current.blocks = state.current.blocks.filter(e => e.id !== action.payload).slice()
	},
    saveProject: (state) => {
		    state.history = state.history.filter(e => e.id !== state.current.id)
		    const copy = Object.assign({}, state.current)
		    copy.saveTime = Date.now()
			state.history.push(copy)
			
			window.alert('site succesfuly saved')
	},
    createNewSite: (state, siteName) => {
		    const id = Math.random().toString(36).substring(7)
		    const template = {
		      id,
		      siteName: siteName.payload,
		      saveTime: null,
		      options: {
		        grid: false,
		        width: 960,
		        height: 960
		      },
		      blocks: []
		    }

			state.current = Object.assign({}, template)
    },
    openHistoryProject: (state, id) => {
		    const findInHistory = state.history.find(e => e.id === id.payload)
		    state.current = Object.assign({}, findInHistory)
    },
    deleteHistoryProject: (state, id) => {
		    state.history = state.history.filter(e => e.id !== id.payload).slice()
    }

  }
})

export const { saveBlock, saveBlockState, createNewSite, deleteBlock, saveProject, openHistoryProject, deleteHistoryProject } = builderSlice.actions
export default builderSlice.reducer

