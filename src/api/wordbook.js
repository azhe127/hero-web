import request from '@/utils/request'
import setting from '@/settings'

export function getWordbookitemByCode(code) {
    return request({
        url: `${setting.apiPrefix}/wordbook/getwordbookitembycode/${code}`,
        method: 'get'
    })
}

