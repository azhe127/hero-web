import * as Organization from '@/api/organization/index'
import * as Corporation from '@/api/organization/corporation'
import * as Department from '@/api/organization/department'

const actions = {
    getOrgTree({ commit }) {
        return new Promise((resolve, reject) => {
            Organization.getOrgTree().then(response => {
                const { data } = response
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getDeptPosition({ commit }, deptId) {
        return new Promise((resolve, reject) => {
            Department.getDeptPosition(deptId).then(response => {
                const { data } = response
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getDeptPositionByOrgId({ commit }, orgId) {
        return new Promise((resolve, reject) => {
            Department.getDeptPositionByOrgId(orgId).then(response => {
                const { data } = response
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    getCorporationByOrgId({ commit }, orgId) {
        return new Promise((resolve, reject) => {
            Corporation.getCorporationByOrgId(orgId).then(response => {
                const { data } = response
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    getDepartmentByOrgId({ commit }, orgId) {
        return new Promise((resolve, reject) => {
            Department.getDepartmentByOrgId(orgId).then(response => {
                const { data } = response
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    createDepartment({ commit }, input) {
        return new Promise((resolve, reject) => {
            Department.createDepartment(input).then(response => {
                const { data } = response
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })       
    },

    createCorporation({ commit }, input) {
        return new Promise((resolve, reject) => {
            Corporation.createCorporation(input).then(response => {
                const { data } = response
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })       
    }    
}

export default {
    namespaced: true,
    actions
}
