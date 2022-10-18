const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const content = document.querySelector("section")

let feeds = ""
let j = 1;
for (let i = 0; i < posts.length; i++) {
    feeds += `
            <div class="list${i}">
                <div class="user-info">
                    <img class="user-avatar" src="${posts[i].avatar}">
                    <div class="user-details">
                        <div><span class="userFullName">${posts[i].name}</span></div>
                        <span class="location">${posts[i].location}</span>
                    </div>
                </div>
                <div class="post">
                    <img class="post-img" id="pic${i}" src="${posts[i].post}">
                </div>
                <div class="interactions">
                    <div class="container">
                        <div class="icons">
                            <img src="images/icon-heart.png" class="heart">
                            <img src="images/icon-comment.png" class="comment">
                            <img src="images/icon-dm.png" class="dm">
                        </div>
                        <div class="likes">
                            <span class="hearts">${posts[i].likes} likes<span>
                        </div>
                        <div class="caption">
                            <span class="uName">${posts[i].username}</span><p class="comments">${posts[i].comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    if (j < posts.length) {
        feeds += `<div class="gap"></div>`
        j++
    }
}

content.innerHTML = feeds;


addEventListener("click", function() {
    let image = []
    for (let i = 0; i < posts.length; i++) {
         image[i] = document.getElementById("pic[i]")
         console.log(image[i])
    }
})