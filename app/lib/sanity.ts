
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const client= createClient({
    projectId:"phoi7uyk",
    dataset:"production",
    apiVersion:"2022-03-2025",
    useCdn:true,
})
const builder = imageUrlBuilder(client) 
export function urlFor(source:any){
    return builder.image(source);
}