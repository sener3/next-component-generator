const capitalize = (string: string): string => {
    return string.at(0)?.toUpperCase() + string.substring(1, string.length);
};

export default capitalize;
