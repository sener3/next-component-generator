const componentTemplate = (name: string): string => {
    return `import { FC } from "react";

interface ${name}Props {}
                    
const ${name}: FC<${name}Props> = () => {
    return null;
};

export default ${name};
    `;
};

export default componentTemplate;
