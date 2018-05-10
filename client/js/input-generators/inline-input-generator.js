function InlineInputGenerator() {

    return {
        renderInput: function () {
            return `<input type="text" class="form-control" iid="0" placeholder="Your answer is..." last>`;
        }
    }
}

module.exports = InlineInputGenerator;