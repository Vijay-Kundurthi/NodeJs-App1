class User {
    async findAll() {
        const response = await fetch('https://jsonplaceholder.org/users');
        return await response.json();
    }
    async findById(id) {
        const response = await fetch(`https://jsonplaceholder.org/users?id=${id}`);
        return await response.json();
    }
}

module.exports = User;

