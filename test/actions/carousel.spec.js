import expect from 'expect'
import * as actions from '../../src/actions'

describe('carousel actions', () => {
  it('moveNext should create MOVE_NEXT action', () => {
    expect(actions.moveNext()).toEqual({
      type: 'MOVE_NEXT'
    })
  })

  it('moveNext should create MOVE_PREV action', () => {
    expect(actions.movePrev()).toEqual({
      type: 'MOVE_PREV'
    })
  })

  it('changeThumbnail should create CHANGE_THUMBNAIL action', () => {
    expect(actions.changeThumbnail(1)).toEqual({
      type: 'CHANGE_THUMBNAIL',
      id: 1
    })
  })
})
