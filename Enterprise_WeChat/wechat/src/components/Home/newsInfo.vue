<template lang="html">
    <div class="newsInfo">
        <!-- {{ newsInfo }}
        {{ newsInfo }} -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsInfo:'',
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.newsInfoGet()
        })
    },
    methods: {
        newsInfoGet() {
            let path = this.$store.state.path
            let url = path + '/law/if/v2/encompanylawsknowledge/getCompanyLawsKnowledgeList'
            let request = {
                url : url,
                method: 'POST',
                data: {
                    pageNo: 1,
                    pageSize : 1,
                }
            }
            $.post(url, request.data, e=> {
                let content = e.data.result[0]["CONTENT"]
                this.newsInfo = content
                let n = document.querySelector('.newsInfo')
                n.insertAdjacentHTML('beforeend', content)
            })
        }
    }
}
</script>

<style lang="css">
</style>
