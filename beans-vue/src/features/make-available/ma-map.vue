<template>
<div>
    <h3>Import csv</h3>
    <br />
    <br />
    <input type="file" @change="readFile" /> <!-- implicit event should return FileList -->
    <br>
    <br>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                availability: {}
            }
        },
        methods: {
            readFile() {
                /* return first object in FileList */
                var file = event.target.files[0];
                this.$papa.parse(file, {
                    header: true,
                    complete: function (results) {
                        this.availability = results.data;
                        console.log(this.availability);
                    }
                });
            }
        }
    }
</script>

<style>
</style>
