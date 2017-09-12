import ajax from '../tool/ajax'



export default {
    getAccessToken() {
        var request = {
            url : 'http://59.110.223.182:8085/weixin/AccessToken',
            method: 'GET',
        }
        ajax(request).then(res => {
            commit('AccessToken', {
                res
            })
            log('AccessToken', this.$store.state.AccessToken)
        })
    },
}
