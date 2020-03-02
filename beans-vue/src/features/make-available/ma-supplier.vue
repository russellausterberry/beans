<template>
<div>
    <div class="columns">
        <div class="column"></div>
        <div class="column">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Select supplier to update availability for</p>
                </header>
                <div class="card-content control">
                    <v-select :options="suppliers" v-model="chosenSupplier"></v-select>
                </div>
            </div>
            <br>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Select how to update:</p>
                </header>
                <div class="card-content control">
                    <v-select :options="['from csv', 'manually']" v-model="chosenMethod"></v-select>
                </div>
            </div>
            <br>
            <br>
            <div><input type="file" @change="readFile" /> </div>                
        </div>
        <div class="column"></div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            suppliers: [
                "Food Connect",
                "Sovereign Foods",
                "Mt Cotton Organic Farm",
                "Gabrielle Austerberry",
                "Carol Blight"
            ],
            availability: {},
            chosenSupplier: '',
            chosenMethod: ''
        };
    },
    methods: {
        readFile() {
            var file = event.target.files[0];
            this.$papa.parse(file, {
                header: true,
                complete: function (results) {
                    this.availability = results;
                    console.log(this.availability);
                    console.log(results.meta.fields);
                    console.log(results.data[13].PRODUCT);
                }
            });
        }
    }
};
</script>

<style lang="">
</style>
