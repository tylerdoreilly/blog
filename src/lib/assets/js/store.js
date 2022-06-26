import { writable } from 'svelte/store'



export const currentPage = writable('')
export const fullPath = writable('')
export const isMenuOpen = writable(false)
export const allPosts = writable([])

console.log(currentPage)
console.log('all posts',allPosts)