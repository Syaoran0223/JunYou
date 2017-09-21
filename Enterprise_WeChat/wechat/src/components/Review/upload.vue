<template lang="html">
    <div class="upload">
        <div class="uploadMadin">
            <div class="uploadBg"></div>
            <div class="content">
                <div class="album">
                    照&nbsp;片
                </div>
                <div class="shoot">
                    拍&nbsp;摄
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
    .upload {
        position: fixed;
        top: 0;
        left: 0;
    }
    .upload .uploadBg {
        width: 100vw;
        height: 100vh;
        background: black;
        opacity: 0.6;
    }
    .upload .content {
        position: absolute;
        bottom: 0px;
        height: 240px;
        width: 100%;
        background: #fff;
    }
    .upload .album, .upload .shoot {
        width: 560px;
        height: 60px;
        margin: 0 auto;
        line-height: 60px;
        font-size: 34px;
        color: #f1f7ff;
        text-align: center;
        border-radius: 10px;
    }
    .upload .content .album {
        position: relative;
        top:50px;
        background: #3b93fb;
    }
    .upload .shoot {
        background: #fe9606;
        position: relative;
        top: 82px;
    }
</style>
