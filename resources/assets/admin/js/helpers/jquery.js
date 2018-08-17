class $ {

    constructor() {
        this.cheker = true;
    }

    slideDown(elem, callback = null, time = 300) {
        let now = this.unixTime();
        let remainingHeight = this.scrollHeight(elem) - this.clientHeight(elem);
        let currentHeight = this.clientHeight(elem);

        let timer = setInterval(() => {
            let timeCounter = this.unixTime() - now;

            if (timeCounter <= time) {
                let height = currentHeight + Math.floor(remainingHeight * timeCounter / time);
                elem.style.height = height + 'px';
            } else {
                elem.style.height = this.scrollHeight(elem) + 'px';
                clearInterval(timer);
                typeof callback === 'function' && callback();
            }
        }, 0);

        return this;
    }

    slideUp(elem, callback = null, time = 300) {
        let now = this.unixTime();
        let remainingHeight = this.clientHeight(elem) + this.scrollHeight(elem);
        let currentHeight = this.clientHeight(elem);

        let timer = setInterval(() => {

            let timeCounter = this.unixTime() - now;

            if (timeCounter <= time) {
                let height = currentHeight - Math.floor(remainingHeight * timeCounter / time);
                elem.style.height = height + 'px';
            } else {
                elem.style.height = 0 + 'px';
                clearInterval(timer);
                typeof callback === 'function' && callback();
            }
        }, 0);

        return this;
    }

    slideToggle(elem, callback = null, time = 300) {
        if (this.cheker) {

            if (this.clientHeight(elem) === 0) {
                this.slideDown(elem, callback, time);

                return this;
            }

            this.slideUp(elem, callback, time);

            return this;
        }

        return this;
    }

    done(callback) {
        if (this.cheker) {
            callback();
        }
    }

    find(elem, target) {
        elem = elem || true;
        return elem ?
            document.querySelectorAll(target) :
            elem.querySelectorAll(target);
    }

    clientHeight(elem) {
        return elem.clientHeight;
    }

    scrollHeight(elem) {
        return elem.scrollHeight;
    }

    unixTime() {
        return (new Date()).getTime();
    }

    offsetHeight(elem) {
        return elem.offsetHeight;
    }

    loop(elements, callback) {
        elements.forEach((item) => {
            callback(item);
        });
    }

    select(element, el = null) {
        if (null !== el) {
            return el.querySelectorAll(element);
        }

        return document.querySelectorAll(element);
    }
}

export default new $();