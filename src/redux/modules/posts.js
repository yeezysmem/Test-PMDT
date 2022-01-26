const moduleName = 'posts';

const GET_SUMMARY = `${moduleName}/GET_SUMMARY`;


const defaultState = {
  posts: [],
  currentPage:1,
  perPage:10,
  totalCount:0,
};

/* 
  { type: GET_POSTS, payload: {...} }
*/
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_SUMMARY:
      return { ...state, posts: payload };
    default:
      return state;
  }
};

export const getSummary = ( withPhotos ) => async (dispatch) => {
  try {
    await fetch(`http://135.181.30.244:27007/api/summaries/?photo=${withPhotos ? 'true' : 'false'}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_SUMMARY, payload: data.results }))
  } catch (error) {
    console.log(error)
  }
}


