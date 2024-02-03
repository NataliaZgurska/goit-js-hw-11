const formEl = document.querySelector('.form-search');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
     e.preventDefault();
    const query = Number(e.target.elements.text.value);
    getCommentByPostId(query).then(data => {console.log(data)});
      
    e.target.reset();
}


function getCommentByPostId(postId) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const END_POINT = '/comments';
    const PARAMS = `?postId=${postId}`;

    const url = BASE_URL + END_POINT + PARAMS;

    // const options = {
    //     headers: {
    //         test: 'Hello',
    //         test_123: 'Hello_123',
    //     },
    // };
    return fetch(url).then(res => res.json());
}




