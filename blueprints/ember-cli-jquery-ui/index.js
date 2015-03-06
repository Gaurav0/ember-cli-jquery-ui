module.exports = {
    normalizeEntityName: function() {},
    afterInstall: function() {
        return this.addBowerPackageToProject('jquery-ui#1.11.1');
    }
};
