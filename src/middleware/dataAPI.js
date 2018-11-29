const dataAPI = {
    url: "https://jsonplaceholder.typicode.com",
    async getPosts() {
        const result = {
            posts: [],
            error: null,
            isLoading: false,
        }
        const posts = await fetch(this.url + "/posts")
            .then(res => res.json())
            .catch(error => {
                result.error = error;
                result.isLoading = true;
            })
            .then(res => {
                result.isLoading = true;
                result.posts = res;
            })
        const tmp = await fetch(this.url + "/posts")
                        .then(res => res.json());
        return tmp;
    }
}

export default dataAPI;