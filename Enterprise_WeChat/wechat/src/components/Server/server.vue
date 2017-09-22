<template lang="html">
    <div class="Server">
        这里是 - 服务记录
        <div class="f">
            <!-- <iframe src="http://www.jy12348.com/FileManager/get?vid=09EA993164D889A0BE1F7CAD5CD92228FAD33BB230D25249919C95DA583E9EBF" width="300px" height="500px"></iframe> -->
            <!-- <iframe src="http://www.jy12348.com/FileManager/get?vid=B1BC0EFF4B5126FA127DBAC6E3C955142317487B92DCBE69CFE8B91AAB403B97" width="300px" height="800px" allowfullscreen></iframe> -->
            <iframe src="/static/html/news.htm" width="" height=""></iframe>
        </div>
        <div class="download">
            <button type="button" name="button">下载</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showPdf() {
            // Pdfjs.getDocument('http://www.jy12348.com/FileManager/get?vid=09EA993164D889A0BE1F7CAD5CD92228FAD33BB230D25249919C95DA583E9EBF').then(function (pdfDoc_) {
            // pdfDoc = pdfDoc_;
            // pageCount = pdfDoc.numPages;//获取总页码数
            // // 渲染第一页
            // renderPage(pageNum);
            // });
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.showPdf()
        })
    },
}
</script>

<style lang="css">
    html, body {
        margin: 0;
        padding: 0;
    }
    .Server {
        font-size: 25px;
        padding: 0;
        margin: 0;
    }
    .f iframe {
        width: 100%;
        /*height: 100%;*/
    }
    .download {
        position: fixed;
        bottom: 0px;
        background: lightblue;
        margin-top: 100px;
    }
    .Server button{
        width: 100vw;
        height: 80px;

    }
</style>
