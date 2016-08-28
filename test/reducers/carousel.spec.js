import expect from 'expect'
import carouselApp from '../../src/reducers'

describe('carousel actions', () => {
  it('should handle MOVE_NEXT', () => {
    expect(
      carouselApp({
        imgs: [],
        currentIndex: 0
      },{
        type: 'MOVE_NEXT'
      })
    ).toEqual({
        imgs: [],
        currentIndex: 1
      })
  })

  it('should handle MOVE_PREV', () => {
    expect(
      carouselApp({
        imgs: [],
        currentIndex: 5
      },{
        type: 'MOVE_PREV'
      })
    ).toEqual({
        imgs: [],
        currentIndex: 4
      })
  })

  it('should handle CHANGE_THUMBNAIL', () => {
    expect(
      carouselApp({
        imgs: [],
        currentIndex: 0
      },{
        type: 'CHANGE_THUMBNAIL',
        id: 3
      })
    ).toEqual({
        imgs: [],
        currentIndex: 3
      })
  })


})
