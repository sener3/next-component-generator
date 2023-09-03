import fs from "fs";
import {
    COMPONENTS_PATH,
    COMPONENT_DIR_PATH,
    COMPONENT_FILE_INDEX_PATH,
    COMPONENT_FILE_PATH,
} from "../constants/paths";
import componentTemplate from "../templates/component";
import componentIndexTemplate from "../templates/component-index";
import capitalize from "../utils/capitalize";

const generateComponent = () => {
    const name = process.argv[2]?.toLowerCase();

    if (!name) {
        console.log("Please provide a name");
        return;
    }

    if (!fs.existsSync(COMPONENTS_PATH)) {
        fs.mkdirSync(COMPONENTS_PATH);
    }

    if (!fs.existsSync(COMPONENT_DIR_PATH(name))) {
        fs.mkdirSync(COMPONENT_DIR_PATH(name));
    }

    if (!fs.existsSync(COMPONENT_FILE_PATH(name))) {
        fs.writeFileSync(
            COMPONENT_FILE_PATH(name),
            componentTemplate(capitalize(name))
        );
    }

    if (!fs.existsSync(COMPONENT_FILE_INDEX_PATH(name))) {
        fs.writeFileSync(
            COMPONENT_FILE_INDEX_PATH(name),
            componentIndexTemplate(capitalize(name))
        );
    }
};

generateComponent();
