export const triggerEvent = (name, data, element)=>{
    const event = new CustomEvent(name,{
        detail: data,

    })
    element.dispatchEvent(event);
}