import axios from 'axios';
import { CozeAPI, ChatEventType, RoleType } from '@coze/api';

export const callCozeApi = async (question: string) => {
    const accessToken = 'pat_9mvPrtt78LrnQC2Yo0I8MusvtC4xR6b0twunlSSwdcw4RKzyzouGf62Hmi59sqP3'
    const botId = '7448225485772898358'
    const userId = '喝醉的威士忌'
    const Url = 'https://api.coze.cn/v3/chat'
    const dataRow = {
        bot_id:botId,
        user_id:userId,
        stream:true,
        auto_save_history:true,
        additional_messages:[
            {
                role:'user',
                content:question,
                content_type:'text'
            }
        ]
    }
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    }
    try{
        return await axios.post(Url,dataRow,{headers})
    }
    catch (error){
        console.log('调用 Coze 大模型 API 出现错误：',error)
        throw error
    }
}

