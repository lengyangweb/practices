const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(postsA, callback) {
    setTimeout(() => {
        postsA.forEach(post => {
            posts.push(post);
        })
        // posts.push(post);
        callback();
    }, 2000);
}

const appendPosts = [{ title: 'Post Three', body: 'This is post three'}, {title: 'Post Four', body: 'This is post four'}];

createPost(appendPosts, getPosts);