class Robot {
    #password;

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    get password() {
        return this.#password;
    }

    set password(pw) {
        this.#password = pw;
    }
}

const bot = new Robot("재현", 1234);
console.log(bot.password);

bot.password = 5678;
console.log(bot.password);
