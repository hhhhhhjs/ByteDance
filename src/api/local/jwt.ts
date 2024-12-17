import jwt from 'jsonwebtoken'

// 密钥
const secretKey = 'huangjin666'

// 加密
export const encryption = () => {
    const token = jwt.sign({username: '就好好计划'}, secretKey, {expiresIn: '1h', algorithm: 'HS256'});
    return token;
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
