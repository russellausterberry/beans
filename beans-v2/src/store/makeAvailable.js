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
        state.csvColumns = payload.fields;
        state.itemsToImport = payload.all;
    },
    // reset all
    'CLEAR_CSV_IMPORT' (state) {
        state.currentSupplier = '';
        state.updateMethod = '';
        state.csvColumns = [];
        state.itemsToImport = {};
    },
    'UPDATE_CSV_COLUMNS' (state, payload) {
        state.csvColumns=payload;
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
    },
    updateCsvColumns: ({commit}, payload) => {
        commit('UPDATE_CSV_COLUMNS', payload);
    }
};

// derived state based on store state eg filtering list & counting items
// or simply functions used to return values from the store
const getters = {
    csvColumns: state => {
        return state.csvColumns
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}