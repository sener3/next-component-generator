const componentIndexTemplate = (name: string): string => {
    return `import ${name} from "./${name}";
export default ${name};`;
};

export default componentIndexTemplate;
