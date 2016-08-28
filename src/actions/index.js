export const moveNext = () => {
  return {
    type: 'MOVE_NEXT'
  }
};

export const movePrev = () => {
  return {
    type: 'MOVE_PREV'
  }
};

export const changeThumbnail = (id) => {
  return {
    type: 'CHANGE_THUMBNAIL',
    id
  }
};
