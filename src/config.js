import {config} from "dotenv"

config()

// database cofiguration
export const PORT = process.env.PORT || 5000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'firefly'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'login'
export const DB_PORT = process.env.DB_PORT || 8080