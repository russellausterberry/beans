const state = {
    currentSupplier: '',
    updateMethod: 'csv',
    csvItems: {},
    csvColumns: [],
    itemsToImport: {}
};

const mutations = {
    'SET_METHOD' (state, supplier, method) {
        state.currentSupplier = supplier;
        state.updateMethod = method;
    },
    'IMPORT_CSV' (state, columns, availableItems) {
        state.csvColumns = columns;
        state.itemsToImport = availableItems;
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
        commit('SET_METHOD', supplier, method);
    },
    importCSV: ({commit}) => {
        commit('IMPORT_CSV', columns, availableItems);
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