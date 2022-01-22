const moduleName = 'posts';

const GET_POSTS = `${moduleName}/GET_POSTS`;
const GET_SUMMARY = `${moduleName}/GET_SUMMARY`;
const DELETE_POST = `${moduleName}/DELETE_POST`;
const CREATE_POST = `${moduleName}/CREATE_POST`;


const defaultState = {
  posts: [],
};

/* 
  { type: GET_POSTS, payload: {...} }
*/
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload };
    case GET_SUMMARY:
      return { ...state, posts: payload };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(item => item.id !== payload.id) };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, payload] };
    default:
      return state;
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_POSTS, payload: data }))
  } catch (error) {
    console.log(error)
  }
}

export const getSummary = () => async (dispatch) => {
  try {
    await fetch('http://135.181.30.244:27007/api/summaries/?photo=true')
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_SUMMARY, payload: data.results }))
  } catch (error) {
    console.log(error)
  }
}





export const deletePost = (id) => async (dispatch) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    dispatch({ type: DELETE_POST, payload: { id } })
  } catch (error) {

  }
}

export const createPost = ({ title, body }) => async (dispatch) => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: CREATE_POST, payload: data }));
  } catch (error) {
    console.log(error)
  }
}