const state = {
    currentSupplier: '',
    updateMethod: 'csv',
    csvItems: {},
    csvColumns: [],
    itemsToImport: {}
};

const mutations = {
    'SET_METHOD' (state, currentSupplier, updateMethod) {
        state.currentSupplier = currentSupplier;
        state.updateMethod = updateMethod;
    },
    'IMPORT_CSV' (state, csvColumns, csvItems) {
        state.csvColumns = csvColumns;
        state.itemsToImport = csvItems;
    },
    'CLEAR_CSV_IMPORT' (state) {
        state.currentSupplier = '',
        state.updateMethod = '',
        state.csvColumns = [],
        state.itemsToImport = {}
    }
};
// actions may be asynchronous
const actions = {
    setMethod: ({commit}) => {
        commit('SET_METHOD', state.currentSupplier, state.updateMethod);
    },
    importCSV: ({commit}) => {
        commit('IMPORT_CSV', state.csvColumns, state.csvItems);
    },
    clearCsvImport: ({commit}) => {
        commit('CLEAR_CSV_IMPORT');
    }
};

// derived state based on store state eg filter list & count items
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}