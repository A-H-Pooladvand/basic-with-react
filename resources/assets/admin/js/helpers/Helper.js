Array.prototype.toSelectFormat = function (value = null, title = null) {
    return this.map((item) => {
        return {
            value: value === null ? item : item[value],
            label: title === null ? item : item[title]
        };
    });
};