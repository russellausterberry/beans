/* eslint-disable */

const state = {
    currentSupplier: '',
    updateMethod: 'csv',
    csvItems: {},
    csvColumns: ['one', 'two', 'three'],
    itemsToImport: {}
};

const mutations = {
    // set supplier and udpate method
    'SET_METHOD' (state, currentSupplier, updateMethod) {
        state.currentSupplier = currentSupplier;
        state.updateMethod = updateMethod;
    },
    // import array of column names, and the .csv object
    'IMPORT_CSV' (state, payload) {
        console.log('inside IMPORT_CSV mutation');
        console.log('before assignment, csvColumns is ' + state.csvColumns);
        console.log('parameter csvColumns is ' + payload.fields);
        state.csvColumns = payload.fields;
        state.itemsToImport = payload.all;
        console.log('after assignment, csvColumns is ' + state.csvColumns);
        console.log('1st field: ' + state.csvColumns[0]);
    },
    // reset all
    'CLEAR_CSV_IMPORT' (state) {
        state.currentSupplier = '';
        state.updateMethod = '';
        state.csvColumns = [];
        state.itemsToImport = {};
    }
};
// actions may be asynchronous
const actions = {
    setMethod: ({commit}) => {
        commit('SET_METHOD', payload);
    },
    importCSV: ({commit}, payload) => {
        commit('IMPORT_CSV', payload);
    },
    clearCsvImport: ({commit}) => {
        commit('CLEAR_CSV_IMPORT');
    }
};

// derived state based on store state eg filtering list & counting items
// or simply functions used to return values from the store
const getters = {
    csvColumns: state => {
        console.log('in csvColumns getter; state.csvColumns = ' + state.csvColumns)
        return state.csvColumns
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}