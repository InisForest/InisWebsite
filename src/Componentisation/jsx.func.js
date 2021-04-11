const jsx = (tag, attrs = {}, ...children) => {
    if (typeof tag === "function") {
        if (tag.prototype !== undefined) return new tag({ ...attrs, children });
        else return tag({ ...attrs, children });
    }
    const customElement = customElements.get(tag);
    if (customElement !== undefined) {
        return new customElement({ ...attrs, children });
    }
    const elem = Object.assign(document.createElement(tag), attrs);
    Object.assign(elem.style, attrs.style);
    for (const child of children) {
        if (Array.isArray(child)) elem.append(...child);
        else elem.append(child);
    }
    return elem;
}

export { jsx };