import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post';

function App() {

  const responseInfo = useGetAllPostQuery()
  const responseInfoById = useGetPostByIdQuery(5)
  const responseInfoByLimit = useGetPostByLimitQuery(5)
  const [deletePost, responseInfoDelete] = useDeletePostMutation(11)
  const [createPost, responseInfoCreatePost] = useCreatePostMutation()
  const [updatePost, responseInfoUpdatePost] = useUpdatePostMutation();

  const newPost = {
    title: 'This is New Blog.',
    body: 'This is new Blog content. This is new Blog content. This is new Blog content. This is new Blog content. This is new Blog content. This is new Blog content. This is new Blog content.',
    userId: 1,
  }


  const updatedPost = {
    id: 1,
    title: 'This is Updated Blog.',
    body: 'This updated Blog content.This updated Blog content. This updated Blog content. This updated Blog content. This updated Blo content. This updated Blog content. This updated Blog content. This updated Blog content. This updated Blog content. This updated Blog content.  ',
    userId: 1
  }

  console.log(deletePost)

  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading...</div>

  if (responseInfo.isError) return <h1>An Error occured {responseInfo.error.error}</h1>

  return (
    <div className="App">

      {/* To get All Data */}
      <div >
        <h1>Get All Data</h1>
        {
          responseInfo.data.map((post, i) =>
            <div className="post" key={i}>
              <h3>{post.id}. {post.title}</h3>
              <p>{post.body}</p>
            </div>
          )
        }
      </div >


      {/* To Get Data by Id */}

      {/* <div className='post'>
        <h1>Get Data By Id</h1>
        {
          responseInfoById.data.map((post, i) =>
            <div key={i}>
              <h3>{post.id}. {post.title}</h3>
              <p>{post.body}</p>
            </div>
          )
        }
      </div> */}


      {/* Get Limited Data */}

      <div className='post'>
        <h1>Get Data By Limit</h1>
        {
          responseInfoByLimit.data.map((post, i) =>
            <div key={i}>
              <h3>{post.id}. {post.title}</h3>
              <p>{post.body}</p>
            </div>
          )
        }
      </div>

      {/* Delete Post By Id */}

      <div className="post">
        <h1>Delete Data</h1>
        <button onClick={() => { deletePost(100) }}>Delete Post</button>
      </div>

      {/* Create Post */}

      <div className="post">
        <h1>Create Post</h1>
        <button onClick={() => { createPost(newPost) }}>Create Post</button>
      </div>


      {/* Update Post */}

      <div className='post'>
        <h1>Update Post</h1>
        <button onClick={() => { updatePost(updatedPost) }}>Update Post</button>
      </div>

    </div >
  );
}

export default App;
