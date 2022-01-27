
const moduleName = 'posts';

const GET_SUMMARY = `${moduleName}/GET_SUMMARY`;


const defaultState = {
  posts: [],
  page_count:12,
  current_page:1,
  per_page:10,
  total_count:0,
  next:"",
  previous: "",
};

/* 
  { type: GET_POSTS, payload: {...} }
*/
export default function postReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case GET_SUMMARY:
      return { ...state, posts: payload.results,  total_count: payload.total_count,next: payload.next, previous: payload.previous };
    default:
      return state;
  }
};

export const getSummary = ( {withPhotos, current_page, url } ) => async (dispatch) => {
  try {
    await fetch(url || `http://135.181.30.244:27007/api/summaries/?${current_page ? `page=${current_page}` : '' }&photo=${withPhotos ? 'true' : 'false'}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_SUMMARY, payload: data }))
  } catch (error) {
    console.log(error)  
  }
}


//total/10 - всего страниц 
