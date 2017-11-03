<template>
    <div>
        <h1>{{ title}}</h1>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>
    div.content {background-color:blanchedalmond;}
    div.footer {background-color: burlywood;}
    </style>