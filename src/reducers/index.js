const initialState = {
  imgs: [
    'https://unsplash.it/458/354?random&time=1472179609076',
    'https://unsplash.it/458/354?random&time=1472179634185',
    'https://unsplash.it/458/354?random&time=1472179639144',
    'https://unsplash.it/458/354?random&time=1472179649184',
    'https://unsplash.it/458/354?random&time=1472179659091'
  ],
  currentIndex: 0
};


const carouselApp = (state = initialState, action) => {
  const imgLength = initialState.imgs.length;
  let current = state.currentIndex;

  switch (action.type) {
    case 'MOVE_NEXT':
          return Object.assign({}, state, {
            currentIndex: current < imgLength - 1 ? current + 1 : 0
          })
    case 'MOVE_PREV':
          return Object.assign({}, state, {
            currentIndex: current <= 0 ? imgLength - 1: current - 1
          })
    case 'CHANGE_THUMBNAIL':
          return Object.assign({}, state, {
            currentIndex: action.id === current ? current : action.id
          })
    default:
          return state;
  }
};


export default carouselApp


