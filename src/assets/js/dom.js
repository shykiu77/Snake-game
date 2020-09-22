
export function makeElement(elementType,elementClass){
    const element = document.createElement(elementType)
    element.className = elementClass
    return element
}

