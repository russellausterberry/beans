<template>
<div>
    <div class="columns">
        <div class="column"></div>
        <div class="column">
<!--             <div class="card">
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
            </div> -->
            <br>
            <br>
            <div><input type="file" @change="readFile" /> </div> 
            <br>
            <!-- TODO: find how to display imported columns once readFile() has completed -->
            <div>{{ currentAvailability }} </div>
    
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
            chosenMethod: '',
            showColumns: false
        };
    },
    methods: {
        readFile() {
            console.log('entering readFile(), cols is ' + this.cols);
            var file = event.target.files[0];
            this.$papa.parse(file, {
                header: true,
                complete: function (results) {
                    console.log('inside complete promise; cols is ' + this.cols);

                    this.$store.dispatch('importCSV', results.meta.fields, results);

                    this.availability = results;
                    console.log('inside complete promise: availability updated to: ' + this.availability);

                    this.cols = results.meta.fields;
                    console.log('inside complete promise; updated cols is: ' + this.cols);

                    var col;
                    for (col of this.cols) {
                        console.log(col);
                    }

                    console.log(results.meta.fields);
                    console.log(results.meta.fields[0])
                    console.log(results.data[13].PRODUCT);
                    console.log('type of var ' + typeof(this.cols));
                    this.showColumns = true; 
                    console.log('showColumns is ' + this.showColumns);                   
                }
            });

            console.log('Initial cols: ' + this.cols);
   
        }
    },
    computed: {
        currentAvailability () {
            return this.$store.csvItems
        }
    }
};
</script>

<style lang="">
</style>
