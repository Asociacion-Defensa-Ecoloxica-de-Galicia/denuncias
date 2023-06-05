const protocol = process.env.PROTOCOL
const host = process.env.HOST
const port = process.env.PORT
const baseUrl = process.env.BASE_URL
const version = process.env.VERSION

const BASE_PATH = "/"+[baseUrl, version].join("/")
const URL = protocol+"://"+host+":"+port+BASE_PATH

export {
    BASE_PATH,
    URL
}