<template>
    <div>
        <!-- show existing databases -->
        <div>
            <h3>Existing databases:</h3>
            <ul>
                <li v-for="name in existingNames"
                :key="name.id">
                    {{ name }}
                </li>
            </ul>
        </div>
        <!-- select db -->
        <h3>Database actions:</h3>
        <ul>
            <li v-for="name in desiredNames"
                :key="name"
            > {{ name }}
                <span>
                    <button class="button"
                        @click="createDB(`prefix, name`)">
                    </button>
                    <button>
                        Populate
                    </button>
                    <button>
                        Clear
                    </button>
                    <button>
                        Destroy
                    </button>
                </span>
            </li>
        </ul>
        <!-- select operation -->
        <!-- submit -->
    </div>
</template>

<script>
var PouchDB = require('pouchdb')
require('pouchdb-all-dbs')

var existingNames = PouchDB.allDbs().then(function (dbs) {
  // dbs is an array of strings, e.g. ['mydb1', 'mydb2']
  if(dbs === 'undefined') {
      console.log('dbs is undefined')
      return []
  }
}).catch(function (err) {
  console.log(err)
});

export default {
    data: function() {
        return {
            prefix: 'cf',
            existingNames,
            desiredNames: [
                'Items',
                'Suppliers',
                'Taxonomy'
            ],

            // each set of data is an array of objects
            cf_Items: [],
            cf_Suppliers: [
                {
                    _id: 'FC',
                    name: 'Food Connect',
                    contact: 'Erin',
                    phone: '0410 595 097',
                    email: 'wholesale@foodconnect.com.au',
                    mappings: [
                        [['product'], ['description', 'name']],
                        [['unit'], []],
                        [['unitPrice'], ['odious', 'monkey', 'breath']],
                        [['gst'], ['unitPrice']],
                        [['producer'], []]
                    ]
                },
                {
                    _id: 'SF',
                    name: 'Sovereign Foods',
                    contact: 'Thor',
                    phone: '0402 854 973',
                    email: 'thor@sovereignfoods.com.au',
                    mappings: [
                        [['product'], ['description', 'name']],
                        [['unit'], []],
                        [['unitPrice'], []],
                        [['gst'], ['unitPrice']],
                        [['producer'], ['grower']]
                    ]
                }

            ],
            cf_Taxonomy: []
        }
    },
    methods: {
        createDB(prefix, name) {
            const local = prefix + '_' + name
            const remote = prefix + 'r_' + name

            new PouchDB(local)
            new PouchDB(remote)
            
            local.sync(remote)

        },

        // populateDB(name, data) {
        //     // populate db
        //     // add each doc in 'data' to the 'name' db
        // },

        // clearDB(name) {
        //     // clear db
        // },
        
        // deleteDB(name) {
        //     // delete db
        // }
    }
    
}
</script>