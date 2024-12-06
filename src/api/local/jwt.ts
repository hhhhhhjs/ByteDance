import jwt from 'jsonwebtoken'

// 密钥
const secretKey = 'huangjin666'

// 加密
export const encryption = (content: object) => {
    const token = jwt.sign(content, secretKey)
    localStorage.setItem('username', token)
}

// 解密
export const decryption:object = () => {
    const code = localStorage.getItem('username')
    if(code){
        const decode = jwt.verify(code, secretKey)
        return {
            username: decode
        }
    }
}
