
fetch('https://api.github.com/users/SerguioL/events', {
    headers: {
        'Authorization': GITHUB_TOKEN
    }

})
.then(response => response.json())
.then(data => console.log(data[0].created_at))
.catch(console.error);