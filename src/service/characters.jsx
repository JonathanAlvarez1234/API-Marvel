import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = '8aee549f26d27146aa1a997383384e15b829817a'
const public_api_key = '5e4dc7240ff9294c45f87641a908954c'

const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString();

export const reqCharacters = async () => {
    const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`)
    const { data } = await resp.json()

    return data
}