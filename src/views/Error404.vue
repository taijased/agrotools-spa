<template>
    <div class="error-page">
        <div class="error-title">404</div>
        <div class="error-subtitle">Страница не существует</div>
        <div class="btn-error"  @click="$router.push('/')">Вернуться на главную страницу</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.error-page {
    width: 400px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .error-title {
        color:#2F80ED;
        line-height: normal;
        font-size: 200px;
    }
    .error-subtitle {
        line-height: normal;
        font-size: 26px;
        color: #000;
    }
    .btn-error {
        background: #2F80ED;
        border-radius: 40px;
        padding: 10px 20px;
        color: white;
        margin-top: 30px;
        transition: background .25s ease-in;
        &:hover {
            cursor: pointer;
            background: rgba(47,128,237, 0.7);
            transition: background .25s ease-in;
        }
    }
}
</style>
