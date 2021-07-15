class LocalStorageAPI {
    storage = null;

    constructor() {
        this.storage = localStorage;
    }

    create(user) {
        this.storage.setItem(user.getId(), JSON.stringify(user.toJson()));
    }
}