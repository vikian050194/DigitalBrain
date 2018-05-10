function MatrixInputGenerator() {

    function renderMatrix(settings) {
        let result = "<span class=\"argument\"><table class=\"\"><tbody>";
        var index = 0;

        for (let i = 0; i < settings.size; i++) {
            let line = "<tr>";

            for (let j = 0; j < settings.size; j++) {
                line += `<td><input type="text" iid="${index++}" ${i == settings.size - 1 && j == settings.size - 1 ? "last" : ""}></td>`;
            }

            line += "</tr>";
            result += line;
        }

        result += "</tbody></table></span>";

        return result;
    }

    return {
        renderInput: renderMatrix
    }
}

module.exports = MatrixInputGenerator;