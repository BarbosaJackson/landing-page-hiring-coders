class User {
    constructor(name, email) {
        this.id = this.generateId(name, email);
        console.log(this.id);
        this.name = name;
        this.email = email;
    }

    generateId(name, email) {
        return `${name}_${email}_${new Date().getTime()}`;
    }

    getId() {
        return this.id;
    }

    toJson() {
        return {id: this.id, name: this.name, email: this.email};
    }
}