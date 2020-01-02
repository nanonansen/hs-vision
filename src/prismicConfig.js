import Prismic from "prismic-javascript";

const apiEndpoint = "https://hsvision.cdn.prismic.io/api/v2";
const accessToken =
    "MC5YZ0g5OFJBQUFDSUE5TkZS.77-977-977-977-9KO-_ve-_ve-_ve-_vTXvv70F77-9Ww0L77-9E--_ve-_vRHvv73vv73vv73vv73vv71r77-977-977-9Ik4";

const Client = Prismic.client(apiEndpoint, { accessToken });

export const linkResolver = doc => {
    // Pretty URLs for known types
    if (doc.type === "article") return `/article/${doc.uid}`;
    if (doc.type === "page") return `/${doc.uid}`;
    // Fallback for other types, in case new custom types get created
    return `/doc/${doc.id}`;
};
export default Client;
